var mysql = require('mysql');
var conn = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"node"
});
conn.connect(function(err,result){
if(err)
throw err;
var id = 1;
var sql = "select * from node_js order by id desc";
conn.query(sql,function(err,result){
console.log(result);
});
});