


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
  //we will calculate the estimate of prophets based on PREBOKKINGS from customers, fixed costs such as 
  //rent and employee salaryand fuel cost for the prebooked flights. the estimations will be facility
  //upkeep + vehicle maintainence etc
  
  
  // Global variables 
  


  var TotalYearlySalary;
  
  var TotalMonthlySalary=TotalYearlySalary/12;
  
  // we will give a wild number to this since i have no idea

  var rentoffacilitiespermonth=10000;

  var upkeepestimate=2000;

  var vehiclemaintainenceestimate=2000;
  
  


  // The price of jet fuel as of January 2015 is as follows:
  // found estimate saying that boeing B747 consumes 12 liters of fuel per Kilometer
   // 1 litre = 0.3125 pence (pound sterling)
 

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
 
 function add(a, b) {
	    return a + b;
	}
 
 
 

 
 var ArrayOfYearlySalary= [];
 

 
 //Main functions to interact with 
 // this deals with querying wage and getting some useful info out of the result
 
 // namely creating an array that holds all of the yearly wages printing this array
 
 //then calculating the total and printing also
 
 
 function calculateTotalFuelCostEstimate(){
	 
	 
	 //first we need to get the total number of KM booked for travel
	 dbo.collection("flights").find({}, {projection})
	 
	 
	 
	 
	 
 };
 
 
 function calculateWagePerYear(){
	 
	  dbo.collection("employees").find({}, { projection: { _id: 0, name: 1, salary: 1 } }).toArray(function(err, result) {
		    if (err) throw err;
		    
		    
		    print(result);
		    
		    //Push each salary into an array called : ArrayOfYearlySalary above
		  
		    result.forEach(	
		    		
		      function(row) {
		         ArrayOfYearlySalary.push(row.salary);
		      });
		    
		    
		    
		   print(ArrayOfYearlySalary);
		   
		   
		   TotalYearlySalary=ArrayOfYearlySalary.reduce(add, 0);
		   
		   
		   print (" The total yearly salary of the employees above is"+TotalYearlySalary);   
		   	   
     
	  });
 };
 
 
 
 

//Prints all employees names and their salary,
 //Their salary in an arryay
 //the result of the addition of everyone salary yearly
 
calculateWagePerYear();
  
  
  

  
  db.close();
  
});