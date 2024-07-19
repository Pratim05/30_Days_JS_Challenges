// Day 5: Functions

// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(n){
    let result = n %2 === 0 ? 'Even' : 'Odd'
    console.log(`${n} is ${result}`);
}
checkEvenOdd(49) // 49 is Odd


// Task 2: Write a function to calculate the square of a number and return the result.

function calSquare(n){
    console.log(`The Square of ${n} is ${n*n}`);
}
calSquare(7) // The Square of 7 is 49

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const max = function findMax(x,y){
    return x > y ? x : y
}
console.log(max(6,9)) // 9


// Task 4: Write a function expression to concatenate two strings and return the result.

const concat = function (x,y){
    return x + y
}
console.log(concat('Pratim', 'Bera')) // PratimBera


// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum = (n1, n2)=>{
    return (`Sum of ${n1} anad ${n2} is ${n1+n2}`)
}

console.log(sum(56,7)); // Sum of 56 anad 7 is 63


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const isStrContain = (str, char) =>{
    return str.includes(char)
}
console.log(isStrContain('Pratim','m')); //true

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function findProduct (a,b=10){
    return a*b
}
console.log(findProduct(9)); // 90


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 18){
    return `Hello ${name}, Now you are ${age}.`
}
console.log(greet('Pratim')); // Hello Pratim, Now you are 18

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function manyGreet (n,operation){
    for (let index = 1; index < n; index++) {
        console.log(operation('Pratim'))
        
    }
}
manyGreet(5,greet);


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function addBy5 (n){
    return n+5
}
function muliplyBy10 (n){
    return n*10
}

function highOrderFunction (fun1, fun2, value){

 return (fun2(fun1(value)))

}
console.log(highOrderFunction(addBy5, muliplyBy10 , 9)); // 140
