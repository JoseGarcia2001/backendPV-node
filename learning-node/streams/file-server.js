const fs = require('fs');
const http = require('http');

const server = http.createServer()

server.on('request', (req, res) => {
  fs.readFile('./bigFile', (err, data) => {
    if(err) {
      console.error(err);
    }
    res.end(data)
  })
})

server.listen(3000)