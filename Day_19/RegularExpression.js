// Day 19: Regular Expressions

// Activity 1: Basic Regular Expressions
// Task 1: Write a regular expression to match a simple pattern (e.g.. match all occurrences of the word "JavaScript" in a string). Log the matches.

const regex_JavaScript = /JavaScript/g
let matches = ('JavaScript is an object-oriented language. JavaScript is also a scripting language').match(regex_JavaScript)
console.log(matches) // [ 'JavaScript', 'JavaScript' ]

// Task 2: Write a regular expression to match all digits in a string. Log the matches.

const regex_digit = /\d/g
 matches = ('My age is 20, birth year is 2003').match(regex_digit)
console.log(matches) // [ '2', '0', '2', '0', '0', '3' ]

// Activity 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const reges_capital = /[A-Z][a-z]*/g
matches = ('My age is 20, Birth year is 2003').match(reges_capital)
console.log(matches) // [ 'My', 'Birth' ]


// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const regex_digits = /\d+/g
 matches = ('My age is 20, birth year is 2003').match(regex_digits)
console.log(matches) // [ '20', '2003' ]

// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g.. (123) 456-7890). Log the captures. 

const regex_phone = /\((\d{3})\) (\d{3})-(\d{4})/;
let phone = '(123) 456-7890';
 matches = phone.match(regex_phone);

console.log(`Area Code: ${matches[1]}`);
console.log(`Central Office Code: ${matches[2]}`);
console.log(`Line Number: ${matches[3]}`);

//Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const regex_email = /([^@]+)@([^@]+)/;
let email = 'example@domain.com';
 matches = email.match(regex_email);

if (matches) {
    console.log(`Username: ${matches[1]}`); //Username: example
    
    console.log(`Domain: ${matches[2]}`); // Domain: domain.com
} else {
    console.log('No match found.');
}

// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const regex_matchwordBeg = /^(JavaScript)/g;

let matchesBeg = ('JavaScript is an object-oriented language. JavaScript is also a scripting language').match(regex_matchwordBeg);
console.log(matchesBeg); // [ 'JavaScript']

// • Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const regex_matchwordEnd = /(JavaScript)$/g;

let matchesEnd = ('JavaScript is an object-oriented language. JavaScript is also a scripting language').match(regex_matchwordEnd);
console.log(matchesEnd); // null

// Activity 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

const regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let password = 'Password123!';
let isValidPassword = regex_password.test(password);

console.log(`Password is valid: ${isValidPassword}`); // Password is valid: true



// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const regex_url = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

let url = 'https://www.example.com/path';
let isValidUrl = regex_url.test(url);

console.log(`URL is valid: ${isValidUrl}`); // URL is valid: true
