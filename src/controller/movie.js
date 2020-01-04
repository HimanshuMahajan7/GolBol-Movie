const MovieModel = require('../models/movie');

const Movie = new MovieModel();

const hello = (req, res) => {
    res.json({
        message: "Hello from movie-api",
        version: "1.0.0"
    });
}

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.send({
            status: "Success",
            message: "List of Movies",
            data: {
                noOfMovies: movies.length,
                movies
            }
        });
    } catch (error) {
        res
        .status(500)
        .send({
            status: "Error",
            message: "Some internal server occured"
        });
    }
}

const getMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        if(!movie) {
            return res.status(404).send({
                status: "Not found",
                message: "Movie with given id not found"
            });
        }
        res.send({
            status: "Success",
            message: "Movie with given id",
            data: {
                movie
            }
        });
    } catch (error) {
        console.log(error);
        
        res
        .status(500)
        .send({
            status: "Error",
            message: "Some internal server occured"
        });
    }
}

const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.send({
            status: "Success",
            message: "Movie created successfully",
            data: {
                movie
            }
        });
    } catch (error) {
        res
        .status(500)
        .send({
            status: "Error",
            message: "Some internal server occured"
        });
    }
}

module.exports = {
      hello,
      getMovies,
      getMovie,
      createMovie
};