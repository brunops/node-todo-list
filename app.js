var http = require('http');

var list = [
  'item 1',
  'item 2'
];

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
  }
});

server.listen(3000);
console.log("Server running on port 3000.");

