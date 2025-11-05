const http = require("http"); // Import the built-in HTTP module

let server = http.createServer(function(request, response) { //Useed http.createServer function to create an instance of a wb server application, with callback as parameter
    let body = '<h1>Hello, world!</h1>';
    response.writeHead(200, { // develop an anonymous function to handle the incoming request message and to send back a response message
        'Content-Length': body.length,
        'Content-Type': 'text/html'
    });
    response.end(body); 
});
server.listen(8040);
console.log('Server running at http://localhost:8040');