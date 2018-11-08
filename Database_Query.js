


//connect to mongodb database

var MongoClient = require('mongodb').MongoClient;

var ObjectId = require('mongodb');

var url = "mongodb://localhost:27017/mydb";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  
 
  
  var dbo = db.db("mydb");
  
//here i will hold all of my database queries 


//global variables 
// this will be for a two month period since we are assumed to have only be open
  //this long and have flights covering this period
  
  
  
  // Holds the the employees pay. The business is assumed to have started beginning of October and 
  //we are going through a trial period through November and december. Employees are currently on
  //wage which will increase when the business starts flying i will need to account for this.
  
  
  // Global variables 
  
  var employeepaytraining=0;

  var employeepaytrading=0;

  var rentoffacilities=0;

  var upkeepestimate=0;

  var vehiclemaintainenceestimate=0;

  var fuelaccurateestimate=0;
  
  
  var airportcosts=rentoffacilities+upkeepestimate+vehiclemaintainenceestimate+fuelaccurateestimate;
  
  
  
  //some helper functions

//this function will simply print to the console 
 function print(a){
	 
	 console.log(a);
	 
 };
 
//function for printing output of queries to an external file 
 
 
 function printtotextfile( a){
	 
	  
 };
 
 
 
 //Main functions to interact with 
 

 
 function calculateWagePerMonth(){
	 
	  dbo.collection("employees").find({}, { projection: { _id: 0, name: 1, salary: 1 } }).toArray(function(err, result) {
		    if (err) throw err;
		    
		    
		   print(result)
     
	  });
 };
 
 
 
 

//test1
  
calculateWagePerMonth();
  
  
  

  
  db.close();
  
});