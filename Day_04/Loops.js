// Day 4: Loops

// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
console.log('numbers from 1 to 10 : ');
for (i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
console.log('multiplication table of 5 : ');
for (let index = 1; index <= 10; index++) {
    console.log(`5  *  ${index} = ${5*index}`)
}
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop. • 
let total = 0
let j = 1
console.log('sum of numbers from 1 to 10 : ');
while (j <= 10){
  total += j
  j++
}
console.log(total)

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let max = 10
console.log('print numbers from 10 to 1 : ');
while(max >= 1){
  console.log(max)
  max--
}


// Activity 3: Do...While Loop
// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let k = 1
console.log('numbers from 1 to 5 : ');
do {
  console.log(k)
  k++
} while (k <= 5);


// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

function factorial(n) {
  let result = 1
  let i= n
  do {
    result *= i
    i--

  } while (i > 0 );
  console.log('Factorial is ',result);
}
factorial(5)



// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
  let str = ''
for (let j = 0; j < i; j++) {
  str += '*'
 }
 console.log(str);
}


// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for(let n = 1; n<=10; n++){

  if(n===5) continue
  console.log(n);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.


for(let n = 1; n<=10; n++){

  if(n===7) break
  console.log(n);
}