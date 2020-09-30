const { moviesMock } = require('../utils/moviesMock');

class MoviesService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock)
    return movies || []
  }

  async getMovie() {
    const movie = await Promise.resolve(moviesMock[0].id)
    return movie || {}
  }

  async updateMovie() {
    const movieId = await Promise.resolve(moviesMock[0].id)
    return movieId
  }

  async createMovie() {
    const createdMovieId = await Promise.resolve(moviesMock[0].id)
    return createdMovieId
  }

  async deleteMovie() {
    const deletedMovieId = await Promise.resolve(moviesMock[0].id)
    return deletedMovieId
  }

  async updateParamInMovie() {
    const updatedParamMovieId = await Promise.resolve(moviesMock[0].id)
    return updatedParamMovieId 
  }
}

module.exports = MoviesService