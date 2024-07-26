// Day 14: Classes

// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message. 

class Person {
    constructor(name,age,lname){
        this.name = name
        this.age = age
        this.lname = lname
    }
     greeting() {
        console.log(`Hello ! ${this.name} , Age : ${this.age}`)  
      }


    //getter
    get getName(){
        return `${this.name} ${this.lname}`
    }
    //setter
    set setLname(n){
        this.lname = n
    }
}

const p1 = new Person('Pratim', 21)
p1.greeting() //Hello ! Pratim 21

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

Person.prototype.updateAge = function (newAge){
    this.age = newAge

console.log('New Updated Age is ', this.age)
}

p1.updateAge(20) // New Updated Age is  20


// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property student Id and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person{
    constructor(name,age,id){
        super(name, age)
        this.id  = id
        Student.studentCount++; // For Task 6
    }
    static studentCount = 0

    returnId(){
        console.log(this.id)
    }
}
const s1 = new Student('Pratim',21,1001)
s1.returnId() //1001


// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

Student.prototype.greeting = function(){
    console.log(`Hello ! ${this.name} , Age : ${this.age} , Id : ${this.id}`) 
}
s1.greeting() //Hello ! Pratim , Age : 21 , Id : 1001


// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

Person.greet =  function(){
    console.log(`Good Morning ! `) 
}
Person.greet()

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

Student.totalStudents = function() {
    console.log('Total Students:', Student.studentCount);
};

Student.totalStudents(); // Total Students: 1 


// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter. 

 //getter
//  get getName(){
//     return `${this.name} ${this.lname}`
// }

console.log(p1.getName)


//Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

  //setter
//   set setLname(n){
//     this.lname = n
// }

p1.setLname='Bera'
console.log(p1.lname) //Bera

// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
     #balance = 0

    deposit(n){
        this.#balance +=n
    console.log(`Current Balance is : ${this.#balance}`)
     }
    withdraw(n){
        this.#balance -=n
    console.log(`Current Balance is : ${this.#balance}`)
     }

}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const a1 = new Account
a1.deposit(10000) // Current Balance is : 10000
a1.withdraw(2000) //Current Balance is : 8000