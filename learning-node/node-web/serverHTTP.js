const http = require('http')

const myServer = http.createServer()

myServer.on('request', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('Hello World')
  res.end()
})

myServer.listen(4000);
console.log('servido en http://localhost:4000');