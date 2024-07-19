// Day 6: Arrays

// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let numArr = [1,2,3,4,5]
console.log(numArr);


// Task 2: Access the first and last elements of the array and log them to the console.

console.log(`First element of numArr : ${numArr[0]} `) // 1
console.log(`Last element of numArr : ${numArr[numArr.length-1]} `) // 5

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

numArr.push(6) // Appends new elements to the end of an array, and returns the new length of the array.
console.log(numArr);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.

numArr.pop() // Removes the last element from an array and returns it
console.log(numArr);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

numArr.shift() // Removes the first element from an array and returns it
console.log(numArr);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

numArr.unshift(1) // Inserts new elements at the start of an array, and returns the new length of the array.
console.log(numArr);


// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let updatedNumArray = numArr.map(e => e*e)
console.log(updatedNumArray); // [ 1, 4, 9, 16, 25 ]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let filteredNumArray = numArr.filter(e => e%2===0)
console.log(filteredNumArray); // [ 2, 4 ]


// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

sumOfNumArray =  numArr.reduce((a,c)=> a+c,0)
console.log(sumOfNumArray); // 15

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.

for (let index = 0; index < numArr.length; index++) {
    console.log(numArr[index]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.

numArr.forEach(e=>console.log(e))

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// • Task 13: Access and log a specific element from the two-dimensional array.

console.log('Element of matrix[2][2] : ', matrix[2][2]); // 9