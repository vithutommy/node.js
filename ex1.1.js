var http = require('http');

http.createServer(function (req, res) {
  res.write('welcome to uki , iam tommy');
  res.end();
}).listen(8000);
