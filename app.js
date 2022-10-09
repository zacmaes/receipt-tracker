console.log("It's alive!")

const data = require('./test-data.json')

const receipts = data.receipts  // the receipts array

let addTotalPrices = () => {
    // loops through json and adds the total prices to return the total expenditure.

    let runningTotal = 0
    console.log(runningTotal)

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

// addTotalPrices()

cityCount()