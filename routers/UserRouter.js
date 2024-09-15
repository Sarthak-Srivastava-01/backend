const express = require('express');

const router = express.Router();

// endpoint or route
router.get('/add', (req, res) => {
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