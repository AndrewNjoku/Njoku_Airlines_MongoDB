


//connect to mongodb database

var MongoClient = require('mongodb').MongoClient;

var ObjectId = require('mongodb');

var url = "mongodb://localhost:27017/mydb";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  
  
  var dbo = db.db("mydb");

// here i will hold all of my database queries 


//global variables 
// this will be for a two month period since we are assumed to have only be open
  //this long and have flights covering this period
  
var employeepay=0;
 

//this function will simply print to the console 
 function printtoconsole(a){
	 
	 console.log(a);
	 
 }
 
//function for printing output of queries to an external file 
 
 
 function printtotextfile( a){
	 
	  
 }
 
 
 dbo.
  
  
  //Pilots are assigned to planes if they are available and they also take a few hours break and will also fly the plane back.
  //will assign custom objectID to pilot fields in order to join them relationally with flights and flights with booking.
  