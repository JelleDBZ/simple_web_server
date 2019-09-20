const http = require('http');
const server = http.createServer();
const PORT = 3000;

server.on('request', (request, response) => {
   response.writeHead(200, {'Content-Type':'text/plain'});
   response.write('Hello world');
   response.end();
});

server.listen(PORT, () => {
  console.log(`Node server created at port ${PORT}!`);
});