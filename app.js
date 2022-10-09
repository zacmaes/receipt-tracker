// To run this code, type 'node app.js' in the REPL.IT Console.

const data = require('./test-data.json')    // Require the json receipt data

const receipts = data.receipts  // assign the receipts array to a variable for ease of use

let addTotalPrices = () => {
    // Function: 
    // -assigns a runningTotal count to 0
    // -loops through the receipts array
    // -adds the total prices to return the total expenditure.

    let runningTotal = 0
    console.log(`New Total: ${runningTotal}`)

    for (let i = 0; i < receipts.length; i++) {
        runningTotal += receipts[i].totalPrice
        console.log("------------------------------------------------------------------------")        
        console.log(`Company name: ${receipts[i].company}, add: ${receipts[i].totalPrice} ...`)
        console.log(`New Total: ${runningTotal}`)
        console.log("------------------------------------------------------------------------")        
    }
}

let cityCount = () => {
    let cities = {}

    // for every index in receipts array
    //      if city not in cities object
    //          add {city : 1} to cities object
    //      else add 1 to the value of this city instance key in cities object

    // print the total days spent in each city based upon the receipts

    receipts.forEach(element => {
        if (!(element.city in cities)) {    // If not in the cities object
            console.log(`${element.city} is not inside cities object`)
            cities[element.city] = 1
            console.log(cities)

        } else {
            // console.log("else")
            cities[element.city] += 1
            console.log(cities)
        }
    });
}

addTotalPrices()

cityCount()


// Functionality to add:
// -make more receipt data available for use
// -Instructions/Intro in console at beginning
// -How many receipts would you like to add? 1 - 30??? whatever the top number is
// -Print:
//      -table of all prices
//      -final Total count of prices
//      -days in each city
//      -how many days left for 30 days total