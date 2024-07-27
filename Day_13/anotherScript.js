
const greeting= ()=>{
    console.log('Hi It is an DEFAULT MODULE')
}

export default greeting 

export const addTwoNumbers = (a,b)=>{
    return `The sum of ${a} + ${b} is ${a+b}`
}

export const person = {
    fname: 'Pratim',
    lname: 'Bera',
    greet : function (){
        console.log(`Hello ! ${this.fname} ${this.lname}`)
    }
}

export const subtractTwoNumbers = (a, b) => {
    return `The difference between ${a} and ${b} is ${a - b}`;
};

export const multiplyTwoNumbers = (a, b) => {
    return `The product of ${a} and ${b} is ${a * b}`;
};

export const PI = 3.14159;
export const E = 2.71828;
export const display = (a, b) => {
    return ` ${a} and ${b} `;
};


