const tasks = [
    { id: 1, title: 'Javascript Task', completed: 'false', diffuiculty: 3 },
    { id: 2, title: 'Express Task', completed: 'true', diffuiculty: 4 },
    { id: 3, title: 'React Native Task', completed: 'false', diffuiculty: 4 },
]

function addTask(tasks, newTask){
    tasks.push(newTask);
}

addTask(tasks, { id: 4, title: 'New Task', completed: 'false', diffuiculty: 4 } )
console.log(tasks);