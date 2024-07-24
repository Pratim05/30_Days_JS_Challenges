// Day 10: Event Handling

// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", function () {
  document.getElementsByClassName("text")[0].textContent = "Button Clicked";
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
imgdiv = document.getElementById("ImgDiv");
img = document.getElementById("dbImage");
imgdiv.addEventListener("click", function () {
  console.log("dbl click");
  console.log(img.style.visibility == "");
  if (img.style.visibility == "") {
    img.style.visibility = "hidden";
  } else {
    img.style.visibility = "";
  }
});

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
bgDiv = document.getElementById('background')
bgDiv.addEventListener('mouseover', function () {
    bgDiv.style.backgroundColor = 'blue'
})

// Task 4: Add a mouseout event listener to an element that resets its background color.
bgDiv.addEventListener('mouseout', function () {
    bgDiv.style.backgroundColor = '#cac5c5'
})

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console. 

    input = document.getElementById('input_box') 
    input.addEventListener('keydown', function (event) {
        console.log(event.target.value);
    })

//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

input = document.getElementById('input_box') 
    input.addEventListener('keyup', function (event) {
        document.getElementById('show_text').innerText = event.target.value
    })

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
    e.preventDefault()
    let name  = document.getElementById('name').value
    let age  = document.getElementById('age').value
    console.log(name,age);
})


// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

document.getElementById('country').addEventListener('change', function (e) {
    document.getElementById('display').innerText = e.target.value
})


// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation. 

document.getElementsByTagName('ul')[0].addEventListener('click',function (e) {
    if(e.target.tagName === 'LI'){
        console.log((e.target.textContent));
    }
})


// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
 // Select the parent element
 const parentElement = document.getElementById('parent');

 parentElement.addEventListener('click', function(event) {
     if (event.target && event.target.classList.contains('child')) {
         console.log('Child button clicked:', event.target.innerText);
     }
 });

 const addButton = document.getElementById('addButton');
 addButton.addEventListener('click', function() {
     const newChild = document.createElement('button');
     newChild.className = 'child';
     newChild.innerText = `Child ${parentElement.children.length + 1}`;
     parentElement.appendChild(newChild);
 });
