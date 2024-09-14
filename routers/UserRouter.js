const express = require('express');

const router = express.Router();

// endpoint or route
router.get('/add', (req, res) => {
    res.send('Response from user add');
});

module.exports = router;