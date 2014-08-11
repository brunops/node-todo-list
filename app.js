var http = require('http');

var list = [];

var server = http.createServer(function (req, res) {
  switch (req.method) {
    case 'GET':
      if (req.url === '/') {
        var body = list.map(function (item, i) {
          return i + ') ' + item;
        }).join('\n');
        res.setHeader('Content-Length', Buffer.byteLength(body));
        res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
        res.end(body);
      }
      break;
    case 'POST':
      var item = '';
      req.setEncoding('utf8');
      req.on('data', function (chunk) {
        item += chunk;
      });

      req.on('end', function () {
        list.push(item);
        res.end('OK\n');
      });
      break;
  }
});

server.listen(3000);
console.log("Server running on port 3000.");

