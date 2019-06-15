

//query package


var query = require('./query/Database_Query')

// database config modules

var config = require('./config/Create_Database_Initial')

//connect to mongodb database

const MongoClient = require('mongodb').MongoClient;

const ObjectId = require('mongodb');


//location of databse, here is local but can also point to a cloud based solution
const url = "mongodb://localhost:27017/mydb";


MongoClient.connect(url, function(err, db) {


    if (err) throw err;
    console.log("Database created!");


    const dbo = db.db("mydb");



   // Add documents to my database initially from my config file



function addConfig(){


    dbo.collection("employees").insertMany(config.employees, {w:1}, function(err, res) {
        if (err) throw err;
        console.log("Employees Inserted: " + res.insertedCount);

    });

    //insert the airports into the table

    dbo.collection("airports").insertMany(config.airports, function(err, res){

        if(err) throw err;
        console.log("Airports Inserted" + res.insertedCount)


    });


// i will output the plain ID via the terminal , but can be output to a document. This is for use by me so i have a list of ids in order to add
//to input this to fields in linked documents. Later if i have time i can create a query
    dbo.collection("planes").insertMany(config.planes, {w:1}, function(err, res){

        if(err) throw err;
        console.log("Planes Inserted" + res.insertedCount)


    });



    dbo.collection("flights").insertMany(config.flights, {w:1}, function(err, res){

        if(err) throw err;

        console.log("flights Inserted" + res.insertedCount)

    });



    dbo.collection("bookings").insertMany(config.bookings, {w:1}, function(err, res){

        if(err) throw err;

        console.log("bookings inserted" + res.insertedCount)


    });




}


//functions for querying


function flightcost( monthYear){


  var flightcost = query.calculatefligthCostsForMonth(monthYear,dbo)

  return query.print(flightcost)

}

function employeeWage(year){

    var wagecost = query.calculateWagePerYear(year,dbo)

    return query.print(wagecost)


}


// Initilise database configuration (only needs to be done once


addConfig()

//Perform queries and print to console

flightcost(1118)


    db.disconnect();
})












