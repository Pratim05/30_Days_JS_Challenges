// Activity 1: Arithmetic Operations

const arithmeticOperation = (n1, n2) => {
    console.log("Two Numbers are : ", n1, n2);
    sum = n1 + n2;
    sub = n1 - n2;
    mul = n1 * n2;
    div = n1 / n2;
    rem = n1 % n2;
    return `Result of \n ADDITION :${sum}\n SUBTRACTION : ${sub} \n MULTIPLICATION : ${mul} \n DIVISION :${div} \n REMAINDER :${rem}`;
};
console.log(arithmeticOperation(10, 7));
// Two Numbers are :  10 7
// Result of
//  ADDITION :17
//  SUBTRACTION : 3
//  MULTIPLICATION : 70
//  DIVISION :1
//  REMAINDER :3

// Activity 2: Assignment Operators
number = 50
value = 10
number += value
console.log('Using += : ', number) // 60
number -= value
console.log('Using -= : ', number) //50


// Activity 3: Comparison Operators

console.log("Is 5 > 3 ? => ", 5 > 3);       // true
console.log("Is 5 < 3 ? => ", 5 < 3);       //false
console.log("Is 5 >= 7 ? => ", 5 >= 7);     //false
console.log("Is 5 <= 5 ? => ", 5 <= 5);     //true
console.log("Is 5 === 5 ? => ", 5 === 5);   //true


// Activity 4: Logical Operators

console.log('(20 < 50) && 920 > 10)   => ', ((20 < 50) && (20 > 10))) //true
console.log('(20 < 50) || (20 < 10)   => ', ((20 < 50) || (20 < 10)))  //true


// Activity 5: Ternary Operator

const CheckNegOrPos = (n) => {
    result = n > 0 ? 'Positive' : n === 0 ? 'Zero' : 'Negative'

    return `The number ${n} is ${result}`
}
console.log(CheckNegOrPos(-5)) // The number -5 is Negative

console.log(CheckNegOrPos(0)) // The number 0 is Zero