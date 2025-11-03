const http = require("http"); // Import the built-in HTTP module

let server = http.createServer(function(request, response) { //Useed http.createServer function to create an instance of a wb server application, with callback as parameter
    let body = 'hello, world!';
    response.writeHead(200, { // develop an anonymous function to handle the incoming request message and to send back a response message
        'Content-Length': body.length,
        'Content-Type': 'text/plain'
    });
    response.end(body);
});
server.listen(8040);