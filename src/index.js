const http = require('http');
const server = http.createServer();
const PORT = 3000;
const url = require('url');

function set_response(response, content, status=200){
    response.writeHead(status, {'Content-Type':'text/plain'});
    response.write(content);
}

server.on('request', (request, response) => {
   let path = url.parse(request.url).pathname;
   console.log(path);

   if (path === "/hey"){
        set_response(response, "slash");
   }

   set_response(response, "Hello World");
   response.end();
});

server.listen(PORT, () => {
  console.log(`Node server created at port ${PORT}!`);
});