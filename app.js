var http = require('http');

var list = [];

var server = http.createServer(function (req, res) {
  switch (req.method) {
    case 'GET':
      if (req.url === '/') {
        var i;
        
        for (i = 0; i < list.length; ++i) {
          res.write(i + ') ' + list[i] + '\n');
        }
        res.end();
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

