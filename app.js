// To run this code, type 'node app.js' in the REPL.IT Console.

const data = require('./test-data.json')    // Require the json receipt data

const receipts = data.receipts  // assign the receipts array to a variable for ease of use

// Instructions Code
const instructions1 = `Hello there! My name is Zac.
For the last year, my wife has been travel nursing, and we have been travelling around the United States while I complete my degree.
The United States Internal Revenue Service (IRS) requires that we reside within our 'tax home' for 30 days per year.
We have been keeping receipts from various locations for our records.
This program saves receipt data in json format, runs calculations on the receipt data, and returns that information in the console.
`;

const linebreak     = "--------------------------------------------------------------------------------------------------------"
const instructions_choice1 = "Please choose how many randomly selected, pre-entered receipts you would like to use in your calculations."
const instructions_choice2 = "Select a number in range [1-42]: "
const instructions_choice3 = "Optional choice: Do you want to enter your own receipts? (Y/N): "
const instructions_choice4 = "Please enter the company name, total price, date, and city..."

const enter_company = "company name: "
const enter_price = "price: "
const enter_date = "date (MM/DD/YYYY): "
const enter_city = "city: "
// {"company":"Wendys","totalPrice":55.55,"date":"09/24/2022","city":"Vero Beach"}


console.log(instructions1)


// ----------I/O prompt------------
const prompt = require('prompt');

var schema = {
    properties: {
      proxy: {
        description: 'Proxy url',
      },
      proxyCredentials: {
        description: 'Proxy credentials',
        ask: function() {
          // only ask for proxy credentials if a proxy was set
          return prompt.history('proxy').value > 0;
        }
      }
    }
  };

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get one or two properties from the user, depending on
  // what the user answered for proxy
  //
  prompt.get(schema, function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  proxy: ' + result.proxy);
    console.log('  credentials: ' + result.proxyCredentials);
  });






// const user_input_question = [
//     {
//       description: 'Do you want to enter your own receipts? ("true" = Yes | "false" = No): ',
//       name: 'user_bool',
//       type: 'boolean'
//     }
//   ];

//   const no_input = [
//     {
//       description: 'How many receipts would you like to generate [1 - 42]: ',
//       name: 'number_of_receipts',
//       type: 'integer'
//     }
//   ];

// // const properties = [
// //   {
// //     description: 'Select a number of pre-made receipts to use [0-42]: ',
// //     name: 'number_of_receipts'
// //   },
// //   {
// //     description: ''
// //     name: 'user_receipts_bool',
// //     hidden: true
// //   }
// // ];



// prompt.start();

// prompt.get(user_input_question, function (err, result) {
//     if (err) {
//       return onErr(err);
//     }
//     console.log('Command-line input received:');
//     console.log('  Entering Own Receipts: ' + result.user_bool);
//   });

// prompt.get(no_input, function (err, result) {
//     if (err) {
//       return onErr(err);
//     }
//     console.log('Command-line input received:');
//     console.log('  Program will generate this many receipts: ' + result.number_of_receipts);
//   });

// // prompt.get(properties, function (err, result) {
// //   if (err) {
// //     return onErr(err);
// //   }
// //   console.log('Command-line input received:');
// //   console.log('  Username: ' + result.username);
// //   console.log('  Password: ' + result.password);
// // });

function onErr(err) {
  console.log(err);
  return 1;
}


// ----------------------





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

// addTotalPrices()

// cityCount()


// Functionality to add:
// -make more receipt data available for use
// -Instructions/Intro in console at beginning
// -How many receipts would you like to add? 1 - 30??? whatever the top number is
// -Print:
//      -table of all prices
//      -final Total count of prices
//      -days in each city
//      -how many days left for 30 days total
//      -input your own receipts


//SHOULD HAVE 29 VERO BEACH ENTRIES IN TEST DATA