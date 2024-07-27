// Day 13: Modules
import {addTwoNumbers,multiplyTwoNumbers,person, subtractTwoNumbers} from './anotherScript.js'

import greeting from './anotherScript.js'
// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.


console.log(addTwoNumbers(4,29))


// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

console.log(`Person Object from another Script `)
person.greet()


// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

console.log(subtractTwoNumbers(89,67))
console.log(multiplyTwoNumbers(99,60))

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

greeting() // Hi It is an DEFAULT MODULE


// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as mathUtils from './anotherScript.js' 

console.log(`PI: ${mathUtils.PI}`); // Output: PI: 3.14159
console.log(`E: ${mathUtils.E}`); // Output: E: 2.71828


// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import pkg from 'lodash';
const {_} = pkg; // as it is a Common JS module

let arr = [1,2,3,4,5,6]
let index = _.indexOf(arr,3,0)
console.log(index)

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

// fetchData.js

import axios from 'axios';

const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Data:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();


// Activity 5: Module Bundling (Optional)
// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process