// Day 9: DOM Manipulation

// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.

let main = document.getElementById('main')
main.innerText += ' Pratim'

// Task 2: Select an HTML element by its class and change its background color.

let bg = document.getElementsByClassName('bg-grey')[0]
console.log(bg);
bg.style.background = 'grey'

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.

let newDiv = document.createElement('div')
newDiv.textContent = 'This Div is append by DOM.js'
document.body.appendChild(newDiv)

// Task 4: Create a new li element and add it to an existing ul list.

let newList = document.createElement('li')
newList.textContent = 'List item added by DOM.js'
document.getElementsByTagName('ul')[0].appendChild(newList)

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.

let remove = document.getElementsByClassName('remove')[0]
document.body.removeChild(remove)

// Task 6: Remove the last child of a specific HTML element.
lastChild = document.getElementsByTagName('ul')[0].lastElementChild
document.getElementsByTagName('ul')[0].removeChild(lastChild)

// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let image = document.getElementsByTagName('img')[0]
image.src = "https://w7.pngwing.com/pngs/12/367/png-transparent-world-bank-education-professional-development-organization-economic-development-url-miscellaneous-service-logo.png"

// Task 8: Add and remove a CSS class to/from an HTML element.

image.classList.add('sm-image')
image.classList.remove('sm-image')

// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph. 
document.getElementById('changeText').addEventListener('click', function () {
    document.getElementById('text').innerText = 'Button Clicked !!'
})

//Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById('changeText').addEventListener('mouseover', function () {
    document.getElementById('changeText').style.borderColor = 'red'
})
