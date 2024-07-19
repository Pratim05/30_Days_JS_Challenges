// Day 3: Control Structures

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

const CheckNum = (n) => {
    if (n > 0) {
      console.log(`${n} is Positive`);
    } else if (n == 0) {
      console.log(`${n} is Zero`);
    } else {
      console.log(`${n} is Negative`);
    }
  };
  CheckNum(-8); // -8 is Negative
  
  // Task 2: Write a program to check if a person is eligible to vote (age >- 18) and log the result to the console.
  
  const isElegible = (n) => {
    if (n >= 18) {
      console.log("Person is eligible to vote ");
    } else {
      console.log("Person is not eligible to vote ");
    }
  };
  isElegible(20); // Person is eligible to vote
  
  // Activity 2: Nested If-Else Statements
  // Task 3: Write a program to find the largest of three numbers using nested if-else statements.
  
  const findLargest = (a, b, c) => {
    if (a > b && a > c) {
      console.log(`${a} is Largest among ${a}, ${b}, ${c}`);
    } else {
      if (b > c) {
        console.log(`${b} is Largest among ${a}, ${b}, ${c}`);
      } else {
        console.log(`${c} is Largest among ${a}, ${b}, ${c}`);
      }
    }
  };
  findLargest(11, 10, 9); // 11 is Largest among 11, 10, 9
  
  // Activity 3: Switch Case
  // Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
  
  const dayOfWeek = (value) => {
    switch (value) {
      case 1:
        console.log("Sunday");
        break;
      case 2:
        console.log("Monday");
        break;
      case 3:
        console.log("Tuesday");
        break;
      case 4:
        console.log("Wednesday");
        break;
      case 5:
        console.log("Thursday");
        break;
      case 6:
        console.log("Friday");
        break;
      case 7:
        console.log("Saturday");
        break;
      default:
        console.log("Enter Between 1-7");
        break;
    }
  };
  
  dayOfWeek(5); // Thursday
  
  // Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
  
  const assignGrade = (score) => {
    let grade;
    switch (true) {
      case score >= 80 && score <= 100:
        grade = "A";
        break;
  
      case score >= 70 && score <= 79:
        grade = "B";
        break;
  
      case score >= 60 && score <= 69:
        grade = "C";
        break;
  
      case score >= 50 && score <= 59:
        grade = "D";
        break;
  
      case score >= 0 && score <= 49:
        grade = "F";
        break;
  
      default:
        break;
    }
    console.log("Your Grade is : ", grade);
  };
  assignGrade(40); // Your Grade is :  F
  
  // Activity 4: Conditional (Ternary) Operator
  // Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
  
  const checkOddEven = (n) => {
    result = n % 2 == 0 ? "Even" : "0dd";
    console.log(`${n} is ${result}`);
  };
  checkOddEven(7); // 7 is 0dd
  
  // Activity 5: Combining Conditions
  // Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
  
  const isLeapyear = (year) => {
    let r = year % 4;
    let re = year % 100;
    let rem = year % 400;
  
    let leapyear = (r === 0 && re != 0) || rem === 0 ? "leapyear" : "Not leapyer";
    console.log(`${year} is ${leapyear}`);
  };
  isLeapyear(2100); // 2100 is Not leapyer
  