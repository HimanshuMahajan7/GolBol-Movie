const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    yearOfRelease: {
        type: Number,
        required: true
    },
    cast: [String],
    poster: String
});

class Movie {
    constructor() {
        this.Movie = mongoose.model('Movie', movieSchema);
    }

    create(movie) {
        const newMovie = new this.Movie(movie);
        return newMovie.save();
    }

    findById(id) {
        return this.Movie.findById(id);
    }

    find(
        query = {}, 
        projection = { cast: 1, name: 1, yearOfRelease: 1, poster: 1 }, 
        skip = 0, 
        limit = 100
    ) {
       return this.Movie.find(query, projection).skip(skip).limit(limit);
    }
}

module.exports = Movie;