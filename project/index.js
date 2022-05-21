//#dev01 -> How to create a server with express and basic events

const express = require('express'); // importing express

const app = express(); // making a variable for using express

const server = app.listen(3000, () => //using 3000 as port
{
    console.log('server is running..'); // getting a confirmation if server is running
});

app.get('/', (req, res) =>{
    res.send('Home Pag')
})