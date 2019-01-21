var mysql = require('mysql');
var conn = mysql.createConnection({
	host:"localhost",
	username:"root",
	password:""
});
conn.connect(function(err){
	if(err)
		throw err;
	console.log("connected");
	
});