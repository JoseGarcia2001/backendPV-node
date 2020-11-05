/* eslint-disable no-console */
const { moviesMock } = require('../utils/mocks/moviesMock')
const MongoLib = require('../lib/mongo')

async function seedMovies() {
  try {
    const mongoDB = new MongoLib()

    const promisesMovies = moviesMock.map(async (movie) => {
      await mongoDB.create('movies', movie)
    })

    await Promise.all(promisesMovies)
    console.log(`${promisesMovies.length} Movies created`)
    return process.exit(0)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    process.exit(1)
  }
}

seedMovies()