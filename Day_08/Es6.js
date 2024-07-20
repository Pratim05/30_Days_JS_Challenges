// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let Person_name = 'Pratim'
let Person_age = 20

let string = `${Person_name} is now ${Person_age}`
console.log(string); // Pratim is now 20

// Task 2: Create a multi-line string using template literals and log it to the console.

let text = 
`The Quick
 Brown Fox`
console.log(text);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numArray = [1,2,3,4,5,6,7,8,9,10]
const [a,b] = numArray
console.log(a,b);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const person = {name:'Pratim', age:20}
const {age} = person
console.log(age);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

arr = [1,2,3,4,5]
newArr = [...arr,6,7,8 ]
console.log(newArr); //[1, 2, 3, 4, 5, 6, 7, 8]



// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...input){
    let sum = 0
    for (const i of input) {
        sum+=i
    } 
    return sum
}
console.log(sum(1,2,3,4,5,6,7,8,9)); //45

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function calProduct(a,b=10){
    return a * b
}
console.log(calProduct(5)); // 50


// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. 

let fruit_name = 'Apple'
let fruit_color = 'Red'

let fruitCall = function(){
    console.log(`It is a ${this.fruit_color} ${this.fruit_name}`);
}
let fruit = {fruit_name,fruit_color,fruitCall}
console.log(fruit); 

//Task 9: Create an object with computed property names based on variables and log the object to the console.

let LAST_NAME = "lastname";
let fullname = {
	firstname: "Pratim"
};
fullname[LAST_NAME] = "Bera";
console.log(fullname); // { firstname: 'Pratim', lastname: 'Bera' }
