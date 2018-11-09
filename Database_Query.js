


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
  
  
//The price of jet fuel as of January 2015 is as follows:
  // found estimate saying that boeing B747 consumes 12 liters of fuel per Kilometer
   // 1 litre = 0.3125 pence (pound sterling)
 
  var fuelcostperlitre =0.3125;
  
  var TotalYearlySalary;
  
  // These are fixed costs and are per month
  
  var rentoffacilitiespermonth=10000;

  var upkeepestimate=2000;

  
  //estimate of maintainence costs per km based on a wild estimate of 1000 pounds per 1000 km
  
  var vehiclemaintainenceestimate=1;
  
  


  

  var fuelaccurateestimate=0;
  
  
 // var airportcosts=rentoffacilities+upkeepestimate+vehiclemaintainenceestimate+fuelaccurateestimate;
  
  
  
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
 
 
 
 
 //!! if i have time i want to implement date and time properly in my database so that i can,
 // include a method decleration which will include an int variable dictating a start and end date 
 //for me to calculate.
 

 
 

 
 
 var arrayofdistancekm=[];
 var totaldistancetraveled=0;
 
 
 
 
 
 function calculatefligthCostsForMonth(a){
	 
	 //function scope variables
	 
	 var fuelusedinlitres = totaldistancetraveled*12
	 var fuelcost = fuelusedinlitres*fuelcostperlitre;
	 //calculating maintainence costs using a estimate of maintainence cost per 1000km traveled (not very accurate but hard to estimate)
	 var maintainencecostforthismonth= totaldistancetraveled*vehiclemaintainenceestimate;
	 var totalflightcostsformonth;
	 
	 
	 
	 // we can get maintainence + fuel costs + Runwayhire from this query 
	 // we are using the assumption that Njoku_Airlines uses the departing and destination airport 
	 //for two hours both ways.
	 
	 
	 
	 dbo.collection("flights").find({"month_year":a}, {projection:{_id: 0,departing_airport: 1, destination_airport:1 ,distance:1}}).toArray(function(err,result){
		 
		 
		 print(result)
		 
		 
		 //This foreach loop will output an array of departing airports and an array of 
		 
		  result.forEach(	
		    		
			      function(row) {
			    	  arrayofdistancekm.push(row.distance);
			      });
		 
		 result.forEach(	
		    		
			      function(row) {
			    	  arrayofdistancekm.push(row.distance);
			      });
		 
	
		 totaldistancetraveled=arrayofdistancekm.reduce(add, 0);
		 
		 
		 //calculating fuel cost here 
		 
	
		 
		 //calculating airport runway hire costs here 
		 
		 
		 
		 //total flight related costs
		
		 
		 print("");
		 print("The total distance travelled is: " + totaldistancetraveled +" KM in month/year :" + a);
		 print("");
		 print("This equates to: " + fuelusedinlitres + "  estimated litres of fuel and a total estimated cost of:" + fuelcost+ "Pounds Sterling" );
		 print("");
		 print("A rough estimate of the maintainence costs involved in this month are :" + maintainencecostforthismonth);
		 
		 
		 print("Total flight related costs for the month/year"+ a + "is:" totalflightcostsformonth)
		 //

		 
	 });
 
 

	 
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
 
//calculateWagePerYear();
 
 
 calculatefligthCostsForMonth(1118);
  
  
  

  
  db.close();
  
});