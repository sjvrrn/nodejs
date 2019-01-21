var mongodb = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/mydb";
mongodb.connect(url,function(err,db){
	if(err)
		throw err;
	console.log('databasecreated');
	db.close();
});
