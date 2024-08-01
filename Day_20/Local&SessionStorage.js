// Day 20: LocalStorage and SessionStorage

// Activity 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

let str = "Set it to Local storage"

localStorage.setItem( 'str', str)
console.log(localStorage.getItem("str"))

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let obj = { name:' Pratim Bera', age : 20 }
let jsonObj = JSON.stringify(obj)

localStorage.setItem( 'obj', jsonObj)
console.log(JSON.parse(localStorage.getItem('obj'))) // {name: ' Pratim Bera', age: 20}

// Activity 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

document.getElementById('localItem').textContent = localStorage.getItem('Name')

document.getElementById('saveItem').addEventListener('click', function (e) {
    e.preventDefault()
    let nameValue = document.getElementById('name').value
    localStorage.setItem('Name',nameValue)
    
})

// Task 4: Write a script to remove an item from localStorage. Log the localstorage content before and after removal.
console.log('Before Remove str : ',localStorage)
localStorage.removeItem('str')
console.log('After Remove str : ',localStorage)

// Activity 3: Understanding SessionStorage
// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
let string = "Set it to Session storage"

sessionStorage.setItem( 'string', string)
console.log(sessionStorage.getItem("string")) //Set it to Session storage

// Task 6: Write a script to save an object to sessionstorage by converting it to a JSON string. Retrieve and parse the object, then log it.

sessionStorage.setItem( 'Sessionobj', jsonObj) // JsonObj is a JSON string

console.log(JSON.parse(sessionStorage.getItem('Sessionobj'))) // {name: ' Pratim Bera', age: 20}


// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

document.getElementById('sessionItem').textContent = sessionStorage.getItem('Name')

document.getElementById('saveItemtoSession').addEventListener('click', function (e) {
    e.preventDefault()
    let nameValue = document.getElementById('name').value
    sessionStorage.setItem('Name',nameValue)
})

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

console.log('Before Remove string : ',sessionStorage)
sessionStorage.removeItem('string')
console.log('After Remove string : ',sessionStorage)

// Activity 5: Comparing LocalStorage and SessionStorage
// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

const saveToBoth = (key,val)=>{
    localStorage.setItem(key,val)
    sessionStorage.setItem(key,val)
}
saveToBoth('myName','PRATIM')
console.log('Local storage :',localStorage)
console.log('Session storage :',sessionStorage)


// Task 10: Write a function that clears all data from both localstorage and sessionStorage. Verify that both storages are empty.
const clearToBoth = (key,val)=>{
    localStorage.clear()
    sessionStorage.clear()
}
clearToBoth()

console.log('Local storage After Clear :',localStorage)
console.log('Session storage After Clear :',sessionStorage)
