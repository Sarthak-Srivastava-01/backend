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
            if(err.code === 11000){
                res.status(500).json({ message : 'Email Already Registered'});
            } else {
                res.status(500).json({message : 'AN error Occured'});
            }
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


// : denotes a url parameter
router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);

    Model.findOne({ email: req.params.email })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// : denotes a url parameter
router.get('/getbycity/:city', (req, res) => {
    console.log(req.params.city);

    Model.findOne({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;