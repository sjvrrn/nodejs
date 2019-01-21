var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
mongodb.connect(url,function(err,db){
if(err)
throw err;
var dbo = db.db('mydb');
dbo.createCollection("user",function(err,res){
if(err) throw err;
console.log('users collection created');

});
db.close();
});