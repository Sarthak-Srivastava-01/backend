// import express
const express = require('express');
const UserRouter = require('./routers/UserRouter');

// initialize express
const app = express();

// Assign port
const PORT = 5000;

app.use('/user', UserRouter);

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.get('/getall', (req, res) => {
    res.send('response from getall');
});

app.get('/delete', (req, res) => {
    res.send('response from delete');
});

app.get('/getbyid', (req, res) => {
    res.send('response from getbyid');
});

// run server
app.listen(PORT, () => { console.log('server started'); });