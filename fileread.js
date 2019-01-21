var http = require('http');
var file = require('fs');
http.createServer(function(req,res){
file.readFile('DateModule.js',function(err,data){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(data);
	res.end('file reading end');
});	
	
}).listen(8080);

