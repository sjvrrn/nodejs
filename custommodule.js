var http = require('http');
var date = require('./DateModule');
http.createServer(function(req,res){
//res.write("Now Date and Time is "+date.date());
res.writeHead(200,{'Content-Type':'text/html'});
res.write(req.url);
res.end();
}).listen(8080);