var mysql = require('mysql');
var con = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"node"
});
con.connect(function(err){
if(err) throw err;
console.log("connected");
var sql = "INSERT INTO `node_js`(`name`, `password`, `email_id`) VALUES ('Raju','1234','raju@gmail.com')";
con.query(sql,function(err,result){
	if(err)
		 throw err;
	 console.log('one record inserted');
});
});