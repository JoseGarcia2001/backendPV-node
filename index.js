const express = require('express');
const helmet = require('helmet');

const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');

const {
  logErrors,
  validateBoomError,
  errorHandler,
} = require('./utils/middleware/errorHandlers.js');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const { config } = require('./config/index');

const app = express();

// Body-parser
app.use(express.json());
app.use(helmet());

// Routes
authApi(app);
moviesApi(app);
userMoviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(validateBoomError);
app.use(errorHandler);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Escuchando en http://localhost:${config.port}`);
});
