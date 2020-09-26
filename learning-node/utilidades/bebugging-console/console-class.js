const { Console } = require('console')
const fs = require('fs')

const data = fs.createWriteStream('./data.log')
const error = fs.createWriteStream('./error.log')

const consoleFile = new console.Console(data, error)

setInterval(() => {
  consoleFile.log(new Date())
  consoleFile.error(new Error('Hubo un error'))
}, 1000)