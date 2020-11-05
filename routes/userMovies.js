const express = require('express');
const passport = require('passport');
const UserMoviesService = require('../services/userMovies');

const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

const { createUserMovieSchema } = require('../utils/schemas/userMovies');
const { userIdSchema } = require('../utils/schemas/users');
const { movieIdSchema } = require('../utils/schemas/movies');

//JWT Strategy
require('../utils/auth/strategies/jwt');

function userMoviesApi(app) {
  const router = express.Router();

  app.use('/api/user-movies', router);

  const userMoviesService = new UserMoviesService();

  router.get(
    '/:userId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:user-movies']),
    validationHandler({ userId: userIdSchema }, 'params'),
    async (req, res, next) => {
      const { userId } = req.params;

      try {
        const userMovies = await userMoviesService.getUserMovies({ userId });

        res.status(200).json({
          data: userMovies,
          message: 'User movies listed',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:user-movies']),
    validationHandler(createUserMovieSchema),
    async (req, res, next) => {
      const { body: userMovie } = req;

      try {
        const createdMovieId = await userMoviesService.createUserMovie({
          userMovie,
        });

        res.status(201).json({
          data: createdMovieId,
          message: 'User movie created',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:userMovieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:user-movies']),
    validationHandler({ userMovieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      const { userMovieId } = req.params;

      try {
        const deletedUserMovieId = await userMoviesService.deleteUserMovie({
          userMovieId,
        });

        res.status(200).json({
          data: deletedUserMovieId,
          message: 'User movie deleted',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = userMoviesApi;
