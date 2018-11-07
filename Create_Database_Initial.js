
var MongoClient = require('mongodb').MongoClient;

var ObjectId = require('mongodb');

var url = "mongodb://localhost:27017/mydb";

// This is the base script to be used to populate my database. It excludes customer bookings since i wish to tie the bookings to existing fields populated in this document.
// I plan to do this using queries and logic which is in line with a seperate deliverabe and i want to seperate each deliverable to make things
//easier to understand 



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  
  
  var dbo = db.db("mydb");
  
  
  
  
  //quick function to generate ID's so i dont have to assign myself
  
  function idgenerator(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}
  
  
  
  //Pilots are assigned to planes if they are available and they also take a few hours break and will also fly the plane back.
  //will assign custom objectID to pilot fields in order to join them relationally with flights and flights with booking.
  
  var johnpilotid = idgenerator(9999);
  var peterpilotid = idgenerator(9999);
  var amypilotid = idgenerator(9999);
  var hannahpilotid= idgenerator(9999);
  var michaelpilotid = idgenerator(9999);
  
  
  var myEmployees = [
	  
	    { pilot_id: johnpilotid, name: 'John',role:'Pilot',fit_for_flight:'17-03-2001', address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '03/05/2008',holiday_remaining: 30, status: 'working', rtw: 'N/A'},salary: 54000},
	    { pilot_id: peterpilotid, name: 'Peter',role:'Pilot',fit_for_flight:'02-05-2001',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '18/10/2001',holiday_remaining: 30, status: 'holiday', rtw: '05/11/2018'},salary: 54000},
	    { pilot_id: amypilotid, name: 'Amy',role:'Pilot',fit_for_flight:'30-10-1986',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '18/10/2001',holiday_remaining: 30, status: 'holiday', rtw: '10/11/2018'},salary: 54000},
	    { pilot_id: hannahpilotid, name: 'Hannah',role:'Pilot',fit_for_flight:'17-03-2009',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: {soe: '18/10/2001', holiday_remaining: 30, status: 'working', rtw: 'N/A'},salary: 54000},
	    { pilot_id: michaelpilotid, name: 'Michael',role:'Pilot',fit_for_flight:'23-03-2001',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: {soe: '18/10/2001', holiday_remaining: 30, status: 'working', rtw: 'N/A'},salary: 54000}, 
	    
	    
	    { name: 'Sandy',role:'Steward', address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'}, record: { soe: '18/10/2001',holiday_remaining: 30, status: 'working', rtw: 'N/A'},salary: 23000},
	    { name: 'Betty', role:'Steward', address: { street: '15 Horseshoe Avenue', town:'London', postcode: 'E8 5pq'},record: {soe: '18/10/2001', holiday_remaining: 30, status: 'working', rtw: 'N/A'},salary: 18000},
	    { name: 'Richard',role:'Steward',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '18/10/2001',holiday_remaining: 30, status: 'working', rtw: 'N/A'} ,salary: 18000},
	    { name: 'Susan', role:'Steward',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '18/10/2001',holiday_remaining: 30, status: 'working', rtw: 'N/A'} ,salary: 18000},
	   
	    { name: 'Betty', role:'Cleaner', address: { street: '15 Horseshoe Avenue', town:'London', postcode: 'E8 5pq'},record: {soe: '18/10/2001', holiday_remaining: 30, status: 'working', rtw: 'N/A'},salary: 18000},
	    { name: 'Richard',role:'Cleaner',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '18/10/2001',holiday_remaining: 30, status: 'working', rtw: 'N/A'} ,salary: 18000},
	    { name: 'Susan', role:'Cleaner',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '18/10/2001',holiday_remaining: 30, status: 'working', rtw: 'N/A'} ,salary: 18000},
	    

	    { name: 'Betty', role:'HR', address: { street: '15 Horseshoe Avenue', town:'London', postcode: 'E8 5pq'},record: {soe: '18/10/2001', holiday_remaining: 30, status: 'working', rtw: 'N/A'},salary: 18000},
	    { name: 'Richard',role:'HR',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '18/10/2001',holiday_remaining: 30, status: 'working', rtw: 'N/A'} ,salary: 18000},
	    { name: 'Susan', role:'HR',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '18/10/2001',holiday_remaining: 30, status: 'working', rtw: 'N/A'} ,salary: 18000},
	    
	    { name: 'Betty', role:'Booking', address: { street: '15 Horseshoe Avenue', town:'London', postcode: 'E8 5pq'},record: {soe: '18/10/2001', holiday_remaining: 30, status: 'working', rtw: 'N/A'},salary: 18000},
		{ name: 'Richard',role:'Booking',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '18/10/2001',holiday_remaining: 30, status: 'working', rtw: 'N/A'} ,salary: 18000},
	    { name: 'Susan', role:'Booking',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '18/10/2001',holiday_remaining: 30, status: 'working', rtw: 'N/A'} ,salary: 18000},
		    
	    ]
  
  
  
  // This array will hold a list of airports that my airline travels to or from 
  
   
  var myAirports = [{ name: ' Heathrow', location: ' London,England', ruc: 100},
	                 {name: ' Luton', location: ' London,England', ruc: 59},
	                 {name: ' City', location: ' London,England', ruc: 87},
	                 {name: ' Nikola Tesla', location: ' Belgrade,Serbia', ruc: 40},
	                 {name: ' Bangor', location: ' Dubrovnik, Croatia', ruc: 100},
	                 {name: ' John F. Kennedy', location: ' New York, America', ruc: 100},
	                 {name: ' Charles Digor', location: ' Paris,France', ruc: 59},
	                 {name: ' Gatwick', location: ' London,England', ruc: 87},
	                 {name: ' Nikola Tesla', location: ' Belgrade,Serbia', ruc: 40},
	                 {name: ' Bangor', location: ' Bangor, Wales', ruc: 100}]
  
  // Decided to create a collection just for planes as the only other use of planes in this database will be
  //in the flight information. It is also important to store details of planes fro safety resons 
  
  
  //we have made the assumtion here that Njoku airlines has 10 planes in its arsenal and that each plane
  //is kept in service for 10 years or until the mileage has reached a certain limit
  //originally i assigned ID values for the array of planes. upon reflection this wont scale well. i
  //could find a way to increment some int value for each new document added but there is no point since
  // default mongodb will create an object id and assign this to the array items 
  // i worked out that planes are decomissioned after about 27 years of service or after 35000 pressurised cycles 
  // here we make an assumption that planes have a mandatory service that is due every 5 years.
  
  

  // going to create some custom IDs for these planes
  
  var plane1 = idgenerator(9999);
  var plane2 = idgenerator(9999);
  var plane3 = idgenerator(9999);
  var plane4 = idgenerator(9999);
  var plane5 = idgenerator(9999);
  var plane6 = idgenerator(9999);
  var plane7 = idgenerator(9999);
  var plane8 = idgenerator(9999);
  var plane9 = idgenerator(9999);
  
  
  var planes = [
	  
	  { plane_id: plane1,make: 'Boeing', model: '737-800',mileage:10000, range:5665, location: "Heathrow",last_service:'17/07/2017',status:'active'},
	  {plane_id: plane2,make: ' Boeing', model: '767-300ER',flight_cycles:34000, range:10000, location:"Heathrow",last_service:'17/07/2013',status: 'active', notes: "decomission due in 1000 miles, keep an eye"},
	  {plane_id: plane3,make: ' Boeing', model: '737-800',flight_cycles:34000, range:5665, location:"Heathrow",last_service:'17/07/2011',status: 'active'},
	  {plane_id: plane4,make: ' Boeing', model: '737-800',flight_cycles:10000, range:5665, location: "Heathrow",last_service:'17/07/2017',status: 'active', notes:" returning to service on 12/12/2018 "},
	  {plane_id: plane5,make: ' Boeing', model: '747-830',flight_cycles:10000, range:10000, location: "Heathrow",last_service:'17/07/2017',status:'active'},
	  {plane_id: plane6,make: ' Boeing', model: '737-800',flight_cycles:10000, range:5665 , location:"Heathrow",last_service:'17/07/2017',status: 'active'},
	  {plane_id: plane7,make: ' Boeing', model: '747-400',flight_cycles:10000, range:8357,location: "Heathrow",last_service:'17/07/2017',status: 'active'},
	  {plane_id: plane8,make: ' Boeing', model: '747-400',flight_cycles:10000, range:8357,location:"Heathrow",last_service:'17/07/2017',status: 'active'},
      {plane_id: plane9 ,make: ' Airbus', model: 'A321',flight_cycles:5950 , range:10000,location: "Heathrow",last_service:'17/07/2017',status: 'being fixed'}]

  //This will hold details of any customer who books a flight and will keep their details stroed on the system for the next 3 months 
  
  
  // here we will make the assumption that flights are booked up to one month before the flight.
  //also this will include flights scheduled to fly, with details that can change at any time aswell as
  // active flights which will be distinguished with a status row 
  
  

  //here the assumption is made that njoku airlines is a UK based airline which operates out of london and has flights leaving from
   // city, gatwicj luton and heathrow
  

  
 
  
  //we make the assumption here that the airline is newly opening (which is why it needs a database created). It has a number of flights flying out
  //on pre planned popular journeys Njoku_Airlines flies only from UK but has some planes and services setup in certain arbituary destinations
  
  
  
  //creating custom id for the flights. In the future once a flight is added to our service it will be added in a more singular fashion
  //with an ID created dynamically
  
  
  //these ids are only used for relating documents via queries and as such can be stored as strings
  
  var flight1id = idgenerator(9999);
  var flight2id = idgenerator(9999);
  var flight3id = idgenerator(9999);
  var flight4id = idgenerator(9999);
  var flight5id = idgenerator(9999);
  var flight6id = idgenerator(9999);
  var flight7id = idgenerator(9999);
  var flight8id = idgenerator(9999);
  var flight9id = idgenerator(9999);
  var flight10id = idgenerator(9999);
  var flight11id = idgenerator(9999);
  var flight12id = idgenerator(9999);
  
  

  var Flights = [{ flight_id: flight1id,departing_Date_time: "10/12/2018, 15:00", departing_airport:"Heathrow", destination_airport:"Charles Digor",estimated_journey_time: 4, destination_arival_date_time: "N/A",  plane_assigned: plane1 ,pilot_id:johnpilotid },
 	            {flight_id: flight2id, departing_Date_time: "10/12/2018, 21:00", departing_airport:"Charles Digor", destination_airport:"Heathrow",estimated_journey_time: 4, destination_arival_date_time: "N/A",  plane_assigned: plane1 ,pilot_:johnpilotid },
 	            {flight_id: flight3id, departing_Date_time: "11/12/2018, 15:00", departing_airport:"Gatwick", destination_airport:"Nikola Tesla",estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: plane6, pilot_assigned:hannahpilotid},
 	            {flight_id: flight4id, departing_Date_time: "11/12/2018, 15:00", departing_airport:"Gatwick", destination_airport:"Nikola Tesla", estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: plane5 ,pilot_assigned:amypilotid},
 	            {flight_id: flight5id,departing_Date_time: "12/12/2018, 15:00", departing_airport:":Luton",  destination_airport:"Nikola Tesla",estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: plane2,pilot_assigned:hannahpilotid},
 	            {flight_id: flight6id, departing_Date_time: "12/12/2018, 15:00", departing_airport:"Heathrow", destination_airport:"Nikola Tesla", estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned:plane7,pilot_assigned:michaelpilotid},
 	            {flight_id: flight8id, departing_Date_time: "13/12/2018, 15:00", departing_airport:"Heathrow", destination_airport:"Nikola Tesla", estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: plane4 ,pilot_assigned:amypilotid},
 	            {flight_id: flight9id, departing_Date_time: "14/12/2018, 15:00", departing_airport:"Heathrow", destination_airport:"Nikola Tesla", estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: plane3 ,pilot_assigned:hannahpilotid},
 	            {flight_id: flight10id, departing_Date_time: "15/12/2018, 15:00", departing_airport:"City",  destination_airport:"Nikola Tesla",estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: plane1 ,pilot_assigned:michaelpilotid},
 	            {flight_id: flight11id, departing_Date_time: "15/12/2018, 15:00", departing_airport:"City",  destination_airport:"Nikola Tesla",estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: plane4 ,pilot_assigned:michaelpilotid},
 	            {flight_id: flight12id, departing_Date_time: "16/12/2018, 15:00", departing_airport:"City",  destination_airport:"Nikola Tesla",estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: plane1 ,pilot_assigned:johnpilotid }]


  


  var booking =[
  	 {date_time:'03/10/2018', Booke_name:'Cassandra Nevermind',           Passengers:'Cassandra Nevermind',                             Journey:{flight_id:flight1id, flight_clas:'First', seat:'3a'}, cost: 10000 },
  	 {date_time:'03/10/2018', Booke_name:'Bethany Chowdary',              Passengers:'Liam Chowdry,Timothey Chowdry',                   Journey:{flight_id:flight4id,flight_clas:'Economy', seat:'12t,12r'}, cost: 790 },
  	 {date_time:'04/10/2018', Booke_name:'Sandra White',                  Passengers:'Sandra White',                                    Journey:[{flight_id:flight1id, flight_clas:'Economy', seat:'12t'}, {flight_id:flight1id, flight_clas:'Economy', seat:'12t'}], cost: 800 },
  	 {date_time:'07/10/2018', Booke_name:'Andrew Whitmore',               Passengers:'Andrew Whitmore, Stacy Whitmore',                 Journey:{flight_id:flight9id, flight_clas:'Economy', seat:'12t,5i'}, cost: 10000 },
  	 {date_time:'12/10/2018', Booke_name:'Bonjovi Preeti',                Passengers:'Bonjovi Preeti, Mary-Amme Preeti',                Journey:[{flight_id:flight5id, flight_clas:'Economy', seat:'3a,3b'},{flight_id:flight4id, flight_clas:'Business', seat:'12b,12c'}], cost: 10000 },
  	 {date_time:'20/10/2018', Booke_name:'Micheal Daphne',                Passengers:'Petra Vodoplav',                                  Journey:{flight_id:flight6id,  flight_clas:'First', seat:'10f'}, cost:250 },
  	 {date_time:'0/10/2018',  Booke_name:'Crocodile Dundee',              Passengers:'Jibola Babatunde,Mary Babatunde,Crocodile Dundee', Journey:{flight_id:flight12id,flight_clas:'First', seat:'3a,3b,3c'}, cost: 10000 },
  	 {date_time:'03/10/2018', Booke_name:'Cassandra Nevermind',           Passengers:'Lola crinklewood',                                Journey:{flight_id:flight4id,flight_clas:'First', seat:'3a'}, cost: 10000 },
  	 {date_time:'03/10/2018', Booke_name:'Cassandra Nevermind',           Passengers:'Harry Trotter',                                   Journey:{flight_id:flight2id, flight_clas:'First', seat:'3a'}, cost: 10000 },
  	 {date_time:'03/10/2018', Booke_name:'Cassandra Nevermind',           Passengers:'Thor Ragnorak',                                   Journey:{flight_id:flight3id, flight_clas:'Business', seat:'12t'}, cost:5000 }]
             
   


  //will include at the minimum one example of connecting flights with the rest arbituary
  // we are also assuming that there is no hardfast rule for assigning pilots. i will manually assign pilots and plains for 
  //the entries below. in my query document i will demonstrate assigning pilots and planes on the fly, based on their availability 
  //also checking if the plane is due for a service and if the plane has enough range to make the journey.
  
  
  
	 
  
	            
	            
  
  dbo.collection("employees").insertMany(myEmployees, {w:1}, function(err, res) {
	    if (err) throw err;
	    console.log("Employees Inserted: " + res.insertedCount);
 
   });
  
  //insert the airports into the table
  
dbo.collection("airports").insertMany(myAirports, function(err, res){
	
	if(err) throw err;
	console.log("Airports Inserted" + res.insertedCount)
	
	
});


// i will output the plain ID via the terminal , but can be output to a document. This is for use by me so i have a list of ids in order to add 
//to input this to fields in linked documents. Later if i have time i can create a query 
dbo.collection("planes").insertMany(planes, {w:1}, function(err, res){
	
	if(err) throw err;
	console.log("Planes Inserted" + res.insertedCount)
	
	
});



 dbo.collection("flights").insertMany(Flights, {w:1}, function(err, res){
 	
 	if(err) throw err;
 	
 	console.log("flights Inserted" + res.insertedCount)	
 	
 });
 
 
 
 dbo.collection("bookings").insertMany(booking, {w:1}, function(err, res){
	
	if(err) throw err;
	
	console.log("bookings inserted" + res.insertedCount)
	
	
});
 



// later on in a seperate query javascript document i will need to add some document ID's to be assigned to soome fields here
// i want to do an update using a query to find pilots that are available /planes that are avaiable





db.close();
	  });
 
 