// To run this code, type 'node app.js' in the Console.

const data = require('./test-data.json')    // Require the json receipt data

const receipts = data.receipts  // assign the receipts array to a variable for ease of use

// Instructions Code
const instructions1 = `Hello there! My name is Zac.
For the last year, my wife has been travel nursing, and we have been travelling around the United States while I complete my degree.
The United States Internal Revenue Service (IRS) requires that we reside within our 'tax home' for 30 days per year.
We have been keeping receipts from various locations for our records.
This program will calculate the total price and the number of days spent in each city.
calculating...
`;
console.log("------------------------------------------------------------------------")        
console.log(instructions1)

let addTotalPrices = () => {
    // Function: 
    // -assigns a runningTotal count to 0
    // -loops through the receipts array
    // -adds the total prices to return the total expenditure.

    let runningTotal = 0

    for (let i = 0; i < receipts.length; i++) {
        runningTotal += receipts[i].totalPrice
    }
    console.log("------------------------------------------------------------------------")        
    console.log(`Total Spent from all receipts: $${runningTotal}`)
    console.log("------------------------------------------------------------------------")
    console.log("------------------------------------------------------------------------")        

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
            cities[element.city] = 1

        } else {
            cities[element.city] += 1
        }
    });
    // Show final cities count
    console.log(`You where in Vero Beach for ${cities['Vero Beach']} days this year`)
    console.log(`You where in Sebastian for ${cities['Sebastian']} days this year`)
    console.log(`You where in Seattle for ${cities['Seattle']} days this year`)
    console.log(`You where in Fort Pierce for ${cities['Fort Pierce']} days this year`)
    console.log(`You where in Port Saint Lucie for ${cities['Port Saint Lucie']} days this year`)
    console.log("------------------------------------------------------------------------")        
    console.log("Enter more receipts in the [test-data.json] file using the schema below:")        
    console.log('   {"company":"Wendys","totalPrice":55.55,"date":"09/24/2022","city":"Vero Beach"}')
    console.log("------------------------------------------------------------------------")        
}

// Function calls
addTotalPrices()
cityCount()



// ----------I/O prompt --- Did not Finish :( ------------

// *** Here is my unfinished code using the npm package 'prompt' ***

//          Analysis: Tried to implement this too late, I did not realize collecting 
//                      user input in the node console would be this challenging.

// const prompt = require('prompt');

// const user_input_questions = [
//     {
//       description: 'Do you want to enter your own receipts? ("true" = Yes | "false" = No): ',
//       name: 'user_bool',
//       type: 'boolean'
//     },
//     {
//         description: 'Enter the company name: ',
//         name: 'company_name',
//         type: 'integer',
//         ask: function() {
//           // only ask for proxy credentials if a proxy was set
//           return prompt.history('user_bool').value > 0;
//         }
//       }
//     {
//         description: 'How many receipts would you like to generate [1 - 42]: ',
//         name: 'number_of_receipts',
//         type: 'integer',
//         ask: function() {
//           // only ask for proxy credentials if a proxy was set
//           return prompt.history('user_bool').value > 0;
//         }
//       }
//   ];

// prompt.start();

// prompt.get(user_input_questions, function (err, result) {
//     if (err) {
//       return onErr(err);
//     }
//     console.log('Command-line input received:');
//     console.log('  Entering Own Receipts: ' + result.user_bool);
//     console.log('  Program will generate this many receipts: ' + result.number_of_receipts);

//   });

// function onErr(err) {
//   console.log(err);
//   return 1;
// }
