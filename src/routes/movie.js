const express = require('express');

const movieController = require('../controller/movie');

const router = express.Router();

router.get("/hello", movieController.hello);
router.get("/", movieController.getMovies);
router.get("/:id", movieController.getMovie);
router.post("/", movieController.createMovie);


module.exports = router;