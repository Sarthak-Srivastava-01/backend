const express = require('express');

const router = express.Router();
const Model = require('../models/UserModel');

// GET - to read data
// POST - To read data
// PUT - To update data
// DELETE - To delete data

// Response status codes
// 1. 100 - 199 : Informational response status code
// 1. 200 - 299 : Success status code
// 1. 300 - 399 : Redirect status code
// 1. 400 - 499 : Client side error
// 1. 500 - 599 : Server side error


// endpoint or route
router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);        
        res.status(500).json(err);
    });
    
    // res.send('Response from user add');
});

router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);        
        res.status(500).json(err);
    });
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