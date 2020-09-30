const express = require('express')
const { config } = require('./config/index')
const getMovies = require('./routes/movies')

const app = express()

getMovies(app)

app.listen(config.port, () => {
  console.log(`Escuchando en http://localhost:${config.port}`);
})