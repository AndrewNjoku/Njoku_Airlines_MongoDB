ar MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/mydb";


//This is the base script to be used to populate my database. It excludes customer bookings since i wish to tie the bookings to existing fields populated in this document.
//I plan to do this using queries and logic which is in line with a seperate deliverabe and i want to seperate each deliverable to make things
//easier to understand 


MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	console.log("Connected to Njoku_Airlines passive Database - adding Bookings now");
	var dbo = db.db("mydb");





// connect to databse
// here we will add some booking , to test for functionality, with all fields filled manually.

dbo.collection("bookings").insertMany(booking, {w:1}, function(err, res){
	
	if(err) throw err;
	
	console.log("bookings inserted" + res.insertedCount)
	
	
})




 
