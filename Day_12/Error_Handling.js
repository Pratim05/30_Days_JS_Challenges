// Day 12: Error Handling

// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

const errorThrowing = ()=>{
   throw new Error('An Error Occured ')
}
try {
    errorThrowing()
} catch (error) {
    console.log(error.message)
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

const divide = (a,b)=>{
    if(b === 0)  throw new Error ('Denominator is zero')
    else return (a/b)
}
try {
    divide(17,0)
} catch (error) {
    console.log(error.message)
}

// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

try {
    console.log('This logs under try block')
} catch (error) {
    console.error(error) // execute when error
}finally{
    console.log('This logs under finally block')

}

// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block. 

class CustomError extends Error{
    constructor(message,name = "CustomError"){
        super(message)
        this.name = name
    }
}
const testCustomError = ()=>{
    throw new CustomError("This is Custom error")
}

try {
    testCustomError()
} catch (error) {
    console.error(error.message) //This is Custom error
    console.error(error.name)  //CustomError
}

//Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

const validates = (input)=>{
    if (input===''){
        throw new CustomError('Input is an Empty String','ValidationError')
    }
    return input
}
try {
    validates('')
} catch (error) {
    console.error(error.name, error.message) // ValidationError Input is an Empty String
}

// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use.catch() to handle the rejection and log an appropriate message to the console.

function fetchData(id, delay) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if(id > delay){
            reject('Id is greater than delay')
        }else{
        resolve(`Data from server ${id}`);
        }
      }, delay);
    });
  }

    fetchData(100,1).catch((e)=>{
        console.error(e)
    })
 

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

// Function that returns a promise which randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Promise resolved!');
            } else {
                reject(new Error('Promise rejected!'));
            }
        }, 1000);
    });
}

// Async function that calls randomPromise and handles errors with try-catch
async function handleRandomPromise() {
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

handleRandomPromise();


// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using.catch(). Log an appropriate error message to the console.

const apiURL = 'https://api.genderize.io/'; // invalid url

// Function to fetch data from the public API
function fetchApiData() {
  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Data fetched from API:', data);
    })
    .catch(error => {
      console.error('Fetch error:', error.message);
    });
}

fetchApiData()


// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function AsyncFetchApiData() {
    try {
      const response =   await fetch(apiURL)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
  }
  
  AsyncFetchApiData() // Fetch error: Network response was not ok Unprocessable Entity