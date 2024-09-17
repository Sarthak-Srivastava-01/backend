const express = require('express');

const router = express.Router();
const Model = require('../models/UserModel');

// GET - to read data
// POST - To read data
// PUT - To update data
// DELETE - To delete data

// endpoint or route
router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('Response from user add');
});

router.get('/getall', (req, res) => {
    res.send('response from user getall');
});

router.get('/getbyid', (req, res) => {
    res.send('response from user getbyid');
});

router.get('/update', (req, res) => {
    res.send('response from user update');
});

router.get('/delete', (req, res) => {
    res.send('response from user delete');
});

module.exports = router;