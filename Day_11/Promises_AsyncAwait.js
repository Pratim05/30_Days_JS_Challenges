// Day 11: Promises and Async/Await

// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

let myPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Resolved After 2 second timeout')
    },2000)
})
myPromise.then((value)=>{
    console.log(value);
})

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
let myRejectPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        reject(new Error('Reject After 2 second timeout'))
    },2000)
})
myRejectPromise.catch((error)=>{
    console.log(error);
})

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

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
  
  // Chain the promises
  fetchData(1, 1000)
    .then((result1) => {
      console.log(result1);
      return fetchData(2, 2000);
    })
    .then((result2) => {
      console.log(result2);
      return fetchData(3, 1500);
    })
    .then((result3) => {
      console.log(result3);
      return fetchData(4, 1000);
    })
    .then((result4) => {
      console.log(result4);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

async function logFetchedData() {

      const result = await fetchData(1, 1000);
      console.log(result);
  
  }
  
  // Call the async function
  logFetchedData();


 //Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
 async function logFetchedDataWithTryCatch() {
    try {
      const result = await fetchData(1, 0);
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function
  logFetchedDataWithTryCatch();


// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises. 

// URL of a public API
const apiURL = 'https://api.genderize.io/?name=luc';

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
      console.error('Fetch error:', error);
    });
}

fetchApiData()


//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function fetchApiData2() {
    await fetch(apiURL)
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
        console.error('Fetch error:', error);
      });
  }
  
  fetchApiData2()


// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.


const promise1 = Promise.resolve(10)
const promise2 = 100
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve,100,'hello')
})
Promise.all([promise1,promise2 ,promise3]).then((v)=>{
    console.log(v);
})


// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises

Promise.race([promise1,promise2 ,promise3]).then((v)=>{
    console.log(v);
}) // promise2 is faster here