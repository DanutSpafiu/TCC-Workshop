import express from 'express'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client';
import cors from 'cors'

const app = express();
const prisma = new PrismaClient(); //initialize prisma database
const PORT = 3000;

let users = [];

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send("The server is working...")
})

app.get('/users', cors(), async(req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching users");
    }
});

app.post('/users', cors(), async(req, res) => {
    try{
    const { name, bio, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
   const newUser = await prisma.user.create({
    data: {
        name,
        bio,
        createdAt: new Date().toISOString(),
    },
   });
    res.status(201).json(newUser);
}catch(error) {
    console.error(error);
    res.status(500).send("Error creating user");
}
})

//PUT (Update a user)
app.put('/users/:id', cors(), async(req, res) => {
    const id = Number(req.params.id);
    const { name, bio } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        name,
        bio,
        updatedAt: new Date(),
      },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating user");
  }
});
//DELETE a user
  app.delete("/users/:id", cors(), async (req, res) => {
    const id = req.params.id;

    try {
      await prisma.user.delete({
        where: { id },
      });
      
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting user");
    }
  });



app.listen(PORT, () => {
    console.log(`App is listening on at http://localhost:${PORT}`);
})
//npx prisma studio - run db