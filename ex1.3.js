var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return it's content:
  fs.readFile('ukinode.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("welcom to uki,i'm vithu");
    res.write(data);
    return res.end();
  });
}).listen(8000);

