import express from 'express'
import bcrypt from 'bcrypt'

const app = express();
const PORT = 3000;

let users = [];

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Works")
})

app.get('/users', (req, res) => {
    return res.status(200).json(users);
});

app.post('/users', async(req, res) => {
    try{
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    //acum - ora din momentul cand e trimis requestul
    const acum = new Date().toISOString();
    const newUser = {
        id: users.length,
        name: name,
        email: email,
        password: hashedPassword,
        createdAt: acum, 
        updatedAt: acum

    }
    users.push(newUser);

    res.status(201).json(newUser);
}catch(error) {
    console.error(error);
    res.status(500).send("Error creating user");
}
})

app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const updates = req.body;
    const acum = new Date().toISOString();

  users = users.map((user) => (user.id === id ? { ...user, ...updates, updatedAt: acum } : user));

  const updatedUser = users.find((user) => user.id === id);
  res.status(200).json(updatedUser);
})

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    users = users.filter((user) => user.id !== id); //ii pastreaza pe toti in afara de aia cu id u dat
    
    res.status(204).send();
})

app.listen(PORT, () => {
    console.log(`App is listening on at http://localhost:${PORT}`);
})