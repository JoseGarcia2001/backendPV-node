const express = require('express');
const moviesApi = require('./routes/movies');
const { logErrors, validateBoomError, errorHandler } = require('./utils/middleware/errorHandlers.js');
const { config } = require('./config/index');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

// Body-parser
app.use(express.json());

// Routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(validateBoomError);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Escuchando en http://localhost:${config.port}`);
});
