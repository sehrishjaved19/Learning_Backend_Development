let http = require('http');
http.createServer(function (req, res) {
    res.write('hello from server');//write a response to the client
    res.end();//end of response from server
}).listen(6040);//the server instance listens for http requests on port 6000

console.log('Server running at http://localhost:6040');