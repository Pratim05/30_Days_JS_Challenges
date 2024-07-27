// Day 15: Closures

// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFun() {
  const outerVal = 10;
  function innerFun() {
    console.log("Outer Variable :", outerVal);
  }
  return innerFun;
}
const closure = outerFun(); // to get innerFun
closure(); //Outer Variable : 10

//Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

const myCounter = () => {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      console.log("Current value of Count :", count);
    },
  };
};
const countval = myCounter();
countval.increment();
countval.getValue(); // Current value of Count : 1

countval.increment();
countval.getValue(); // Current value of Count : 2

// Activity 2: Practical Closures
// • Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and Increment it with each call.

function createIdGenerator() {
  let lastId = 0; // Private variable to keep track of the last generated ID

  return function () {
    lastId++;
    return lastId;
  };
}
const generateUniqueId = createIdGenerator();

console.log(generateUniqueId()); // Output: 1
console.log(generateUniqueId()); // Output: 2
console.log(generateUniqueId()); // Output: 3

//Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function createGreeter(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const greetJohn = createGreeter("John");
const greetJane = createGreeter("Jane");

greetJohn(); // Output: Hello, John!
greetJane(); // Output: Hello, Jane!

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct Index.

const createFunctionArray = () => {
  let funArray = [];

  for (let index = 0; index < 10; index++) {
    funArray.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(index)
    );
  }
  return funArray;
};
const functions = createFunctionArray();
functions[0](); // Output: 0
functions[1](); // Output: 1
functions[2](); // Output: 2

// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const itemManger = () => {
  const items = [];

  return {
    add: (item) => {
      items.push(item);
      console.log(`${item} is added : ${items}`);
    },
    remove: (item) => {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        console.log(`${item} is removed : ${items}`);
      }else{
        console.log(`${item} not found`)
      }
    },
    listItem : ()=>{
        console.log(items)
    }
  };
};

const createItemManger = itemManger()
createItemManger.add('Mango')
createItemManger.add('Apple')
createItemManger.listItem()
createItemManger.remove("Apple")
createItemManger.listItem()

// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
    const cache = {}; // Private cache object to store results
  
    return function(...args) {
      const key = JSON.stringify(args); // Create a unique key for the arguments
      if (cache[key] !== undefined) {
        return cache[key]; // Return cached result if it exists
      }
      const result = fn(...args); // Compute the result if not cached
      cache[key] = result; // Store the result in the cache
      return result;
    };
  }
  
  // Example usage
  const slowFunction = (num) => {
    console.log('Computing...');
    return num * num;
  };
  
  const memoizedFunction = memoize(slowFunction);
  
  console.log(memoizedFunction(5)); // Output: Computing... 25
  console.log(memoizedFunction(5)); // Output: 25 (cached result)
  console.log(memoizedFunction(10)); // Output: Computing... 100
  console.log(memoizedFunction(10)); // Output: 100 (cached result)
  


// Task 8: Create a memoized version of a function that calculates the factorial of a number.

const factorial = memoize(function(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  });
  
  // Example usage
  console.log(factorial(5)); // Output: 120
  console.log(factorial(6)); // Output: 720
  console.log(factorial(5)); // Output: 120 (cached result)