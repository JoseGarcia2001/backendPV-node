const http = require('http');
const moment = require('moment');

const server = http.createServer()

server.on('request', (req, res) => {
  if(req.method === 'POST' && req.url === '/iWasBorn') {
    let body = []
    req
      .on('data', chunk => {
        body.push(chunk)
      })
      .on('end', () => {
        res.writeHead(200, { "Content-Type": "text-plain" });
        body = Buffer.concat(body).toString()
        body = moment(body, 'YYYY/MM/DD')
        res.end(
          `Naciste un ${body.format("dddd")} a los ${body.format("DDDD")} días del año`
        );
      })
  }
});


server.listen(3000)