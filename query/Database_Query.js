

  // Holds the the employees pay. The business is assumed to have started beginning of October and 
  //we are going through a trial period through November and december. Employees are currently on
  //we will calculate the estimate of prophets based on PREBOKKINGS from customers, fixed costs such as 
  //rent and employee salaryand fuel cost for the prebooked flights. the estimations will be facility
  //upkeep + vehicle maintainence etc
  
  
  // Global variables 
  
  
//The price of jet fuel as of January 2015 is as follows:
  // found estimate saying that boeing B747 consumes 12 liters of fuel per Kilometer
   // 1 litre = 0.3125 pence (pound sterling)

    const fuelcostperlitre = 0.3125;
    var TotalYearlySalary;
  
  // These are fixed costs and are per month

    const rentoffacilitiespermonth = 10000;
    const upkeepestimate = 2000;

    //estimate of maintainence costs per km based on a wild estimate of 1000 pounds per 1000 km

    const vehiclemaintainenceestimate = 1;


    const fuelaccurateestimate = 0;


    // var airportcosts=rentoffacilities+upkeepestimate+vehiclemaintainenceestimate+fuelaccurateestimate;


// Export modules

    module.exports = {


        //some helper functions

//this function will simply print to the console 
        print: function (a) {

            console.log(a);

        },

//function for printing output of queries to an external file
        printtotextfile: function (a) {


        },


        add: function (a, b) {
            return a + b;
        },


        calculatefligthCostsForMonth: function (monthYear,dbo) {

            //lateint
            var arrayofdistancekm = []
            var totaldistncetraveled = 0
            var totalflightcostsformonth

            // Function constants
            const fuelusedinlitres = totaldistncetraveled * 12;
            const fuelcost = fuelusedinlitres * fuelcostperlitre;
            //calculating maintainence costs using a estimate of maintainence cost per 1000km traveled (not very accurate but hard to estimate)
            const maintainencecostforthismonth = totaldistancetraveled * vehiclemaintainenceestimate;


            // we can get maintainence + fuel costs + Runwayhire from this query
            // we are using the assumption that Njoku_Airlines uses the departing and destination airport
            //for two hours both ways.

            dbo.collection("flights").find({"month_year": monthYear}, {
                projection: {
                    _id: 0,
                    departing_airport: 1,
                    destination_airport: 1,
                    distance: 1
                }
            }).toArray(function (err, result) {
                //This foreach loop will output an array of departing airports and an array of

                result.forEach(
                    function (row) {
                        arrayofdistancekm.push(row.distance);
                    });


                totaldistancetraveled = arrayofdistancekm.reduce(add, 0);


            });
        },


        calculateWagePerYear: function (dbo) {


            dbo.collection("employees").find({}, {
                projection: {
                    _id: 0,
                    name: 1,
                    salary: 1
                }
            }).toArray(function (err, result) {
                if (err) throw err;


                var ArrayOfYearlySalary = [];


                print(result);

                //Push each salary into an array called : ArrayOfYearlySalary above

                result.forEach(
                    function (row) {
                        ArrayOfYearlySalary.push(row.salary);
                    });


                TotalYearlySalary = ArrayOfYearlySalary.reduce(add, 0);


                return TotalYearlySalary;


            });
        }
    }

 


  

  
