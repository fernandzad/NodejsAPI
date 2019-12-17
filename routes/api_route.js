const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Running node API');
});

module.exports = router;