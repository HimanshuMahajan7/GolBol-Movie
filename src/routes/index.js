const express = require('express');

const movieApi = require('./movie');

const router = express.Router();

router.use('/movie', movieApi);

module.exports = router;

