// import express
const express = require('express');
const UserRouter = require('./routers/UserRouter');
const ProductRouter = require('./routers/ProductRouter');
const cors = require('cors');

// initialize express
const app = express();

// Assign port
const PORT = 5000;

// middleware
app.use(cors({
    origin : ['http://localhost:3000']
}));
app.use(express.json());
app.use('/user', UserRouter);
app.use('/product', ProductRouter);

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