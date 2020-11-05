const joi = require('@hapi/joi');

const { userIdSchema } = require('./users');
const { movieIdSchema } = require('./movies');

const userMovieIdSchema = joi.string().regex(/^[0-9a-f-A-F]{24}$/);

const createUserMovieSchema = {
  userId: userIdSchema,
  movieId: movieIdSchema,
}

module.exports = {
  userMovieIdSchema,
  createUserMovieSchema
};