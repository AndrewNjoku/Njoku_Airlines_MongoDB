var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/mydb";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("mydb");
  
  
  
  var myEmployees = [
	  
	    { name: 'John',role:'Pilot',fit_for_flight:'17-03-2001', address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '03/05/2008',holiday_remaining: 30, status: 'working', rtw: 'N/A'},salary: 54000},
	    { name: 'Peter',role:'Pilot',fit_for_flight:'02-05-2001',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '18/10/2001',holiday_remaining: 30, status: 'holiday', rtw: '05/11/2018'},salary: 54000},
	    { name: 'Amy',role:'Pilot',fit_for_flight:'30-10-1986',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: { soe: '18/10/2001',holiday_remaining: 30, status: 'holiday', rtw: '10/11/2018'},salary: 54000},
	    { name: 'Hannah',role:'Pilot',fit_for_flight:'17-03-2009',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: {soe: '18/10/2001', holiday_remaining: 30, status: 'working', rtw: 'N/A'},salary: 54000},
	    { name: 'Michael',role:'Pilot',fit_for_flight:'23-03-2001',address: { street: '139 Highbury Grove', town:'London', postcode: 'n5 1hp'},record: {soe: '18/10/2001', holiday_remaining: 30, status: 'working', rtw: 'N/A'},salary: 54000}, 
	    
	    
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
	                 { name: ' John F. Kennedy', location: ' New York, America', ruc: 100},
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
  var planes = [{make: ' Boeing', model: '737-800',mileage:10000, range:5665, location: Heathrow,last_service:'17/07/2017',status:'active'},
	  {make: 'Boeing', model: '767-300ER',flight_cycles:34000, range:10000, location: Heathrow,last_service:'17/07/2017',status: 'active', notes: "decomission due in 1000 miles, keep an eye"},
	  {make: ' Boeing', model: '737-800',flight_cycles:34000, range:5665, location: Heathrow,last_service:'17/07/2017',status: 'active'},
	  {make: ' Boeing', model: '737-800',flight_cycles:10000, range:5665, location: Heathrow,last_service:'17/07/2017',status: 'being fixed', notes:" returning to service onL 12/12/2018 "},
	  {make: ' Boeing', model: '747-830',flight_cycles:10000, range:10000, location: Heathrow,last_service:'17/07/2017',status:'active'},
	  {make: ' Boeing', model: '737-800',flight_cycles:10000, range:5665 , location: Heathrow,last_service:'17/07/2017',status: 'active'},
	  {make: ' Boeing', model: '747-400',flight_cycles:10000, range:8357,location: Heathrow,last_service:'17/07/2017',status: 'active'},
	  {make: ' Boeing', model: '747-400',flight_cycles:10000, range:8357,location: Heathrow,last_service:'17/07/2017',status: 'being fixed'},
      {make: ' Airbus', model: 'A321',flight_cycles:5950 , range:10000,location: Heathrow,last_service:'17/07/2017',status: 'being fixed'}]

 var booking =[
	 {date_time:'03/10/2018', Booke_name:'Cassandra Nevermind', Passengers:'Cassandra Nevermind',                                       Journey:{flight_id:211231, flight_clas:'First', seat:'3a'}, cost: 10000 },
	 {date_time:'03/10/2018', Booke_name:'Bethany Chowdary',              Passengers:'Liam Chowdry,Timothey Chowdry',                   Journey:{flight_id:211231,flight_clas:'Economy', seat:'12t'}, cost: 790 },
	 {date_time:'04/10/2018', Booke_name:'Sandra White',                  Passengers:'Sandra White',                                    Journey:[{flight_id:987890, flight_clas:'Economy', seat:'12t'}, {flight_id:987890, flight_clas:'Economy', seat:'12t'}], cost: 800 },
	 {date_time:'07/10/2018', Booke_name:'Andrew Whitmore',               Passengers:'Andrew Whitmore, Stacy Whitmore',                 Journey:{flight_id:211231, flight_clas:'Economy', seat:'12t,5i'}, cost: 10000 },
	 {date_time:'12/10/2018', Booke_name:'Bonjovi Preeti',                Passengers:'Bonjovi Preeti, Mary-Amme Preeti',                Journey:[{flight_id:211231, flight_clas:'Economy', seat:'3a,3b'},{flight_id:211237, flight_clas:'Business', seat:'12b,12c,12d'}], cost: 10000 },
	 {date_time:'20/10/2018', Booke_name:'Micheal Daphne',                Passengers:'Petra Vodoplav',                                  Journey:{flight_id:211231,  flight_clas:'First', seat:'10f'}, cost:250 },
	 {date_time:'0/10/2018', Booke_name:'Crocodile Dundee',              Passengers:'Jibola Babatunde,Mary Babatunde,Crocodile Dundee', Journey:{flight_id:211231,flight_clas:'First', seat:'3a'}, cost: 10000 },
	 {date_time:'03/10/2018', Booke_name:'Cassandra Nevermind',           Passengers:'Lola crinklewood',                                Journey:{flight_id:211231,flight_clas:'First', seat:'3a'}, cost: 10000 },
	 {date_time:'03/10/2018', Booke_name:'Cassandra Nevermind',           Passengers:'Harry Trotter',                                   Journey:{flight_id:211231, flight_clas:'First', seat:'3a'}, cost: 10000 },
	 {date_time:'03/10/2018', Booke_name:'Cassandra Nevermind',           Passengers:'Thor Ragnorak',                                   Journey:{flight_id:211231, flight_clas:'Business', seat:'12t'}, cost:5000 }]
	           
  
  
  //This will hold details of any customer who books a flight and will keep their details stroed on the system for the next 3 months 
  
  
  // here we will make the assumption that flights are booked up to one month before the flight.
  //also this will include flights scheduled to fly, with details that can change at any time aswell as
  // active flights which will be distinguished with a status row 
  
  
  //each flight will have an id which is invisible but can be accessed and assigned to a journey
  //here the assumption is made that njoku airlines is a UK based airline which operates out of london and has flights leaving from
   // city, gatwicj luton and heathrow
  
 var Flights = [{departing_Date_time: "10/12/2018, 15:00", departing_airport:"Heathrow", destination_airport:"Nikola Tesla",estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: "00001" ,pilot_assigned:"pilot id"},
	            {departing_Date_time: "10/12/2018, 15:00", departing_airport:"Luton", destination_airport:"Nikola Tesla",estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: "00001" ,pilot_assigned:"pilot id"},
	            {departing_Date_time: "11/12/2018, 15:00", departing_airport:"Gatwick", destination_airport:"Nikola Tesla",estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: "00001" , pilot_assigned:"pilot id"},
	            {departing_Date_time: "11/12/2018, 15:00", departing_airport:"Gatwick", destination_airport:"Nikola Tesla", estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: "00001" ,pilot_assigned:"pilot id"},
	            {departing_Date_time: "12/12/2018, 15:00", departing_airport:":Luton",  destination_airport:"Nikola Tesla",estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: "00001" ,pilot_assigned:"pilot id"},
	            {departing_Date_time: "12/12/2018, 15:00", departing_airport:"Heathrow", destination_airport:"Nikola Tesla", estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: "00001" ,pilot_assigned:"pilot id"},
	            {departing_Date_time: "13/12/2018, 15:00", departing_airport:"Heathrow", destination_airport:"Nikola Tesla", estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: "00001" ,pilot_assigned:"pilot id"},
	            {departing_Date_time: "14/12/2018, 15:00", departing_airport:"Heathrow", destination_airport:"Nikola Tesla", estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: "00001" ,pilot_assigned:"pilot id"},
	            {departing_Date_time: "15/12/2018, 15:00", departing_airport:"City",  destination_airport:"Nikola Tesla",estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: "00001" ,pilot_assigned:"pilot id"},
	            {departing_Date_time: "15/12/2018, 15:00", departing_airport:"City",  destination_airport:"Nikola Tesla",estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: "00001" ,pilot_assigned:"pilot id"},
	            {departing_Date_time: "16/12/2018, 15:00", departing_airport:"City",  destination_airport:"Nikola Tesla",estimated_journey_time: 9, destination_arival_date_time: "N/A",  plane_assigned: "00001" ,pilot_assigned:"pilot id"}

	            
	            
	            
	            
  
  dbo.collection("employees").insertMany(myEmployees, function(err, res) {
	    if (err) throw err;
	    console.log("Employees Inserted: " + res.insertedCount);
 
 
   });
  
  
  //insert the airports into the table
  
dbo.collection("airports").insertMany(myAirports, function(err, res){
	
	if(err) throw err;
	console.log("Airports Inserted" + res.insertedCount)
	
	
})

db.close();
	  });
 
 