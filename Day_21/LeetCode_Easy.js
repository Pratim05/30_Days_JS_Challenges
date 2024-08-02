// Day 21: LeetCode Easy

// Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target .Log the indices for a few test cases.

const twoSum = (arr, target)=>{
    for (let index = 0; index < arr.length; index++) {
        for (let j = 0; j < arr.length; j++) {
            if((arr[index] + arr[j]) === target){
                console.log(index,j)
                return
            }
        }
    }
}
twoSum([1,2,3,4,5,6,7,8],6) // 0 4


// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases,

const reverseInteger = (n)=>{
    let d,sum = 0
    let isNegtive = n<0? true:false
    if(isNegtive) n = n * -1
    while( n !== 0){
        d = n % 10
        sum = sum*10 + d
        n= Math.floor(n / 10)
    }
    if(sum > 2**31) return 0
    return isNegtive ? sum *-1 : sum 
}
console.log(reverseInteger(-123)) // -321
console.log(reverseInteger(23)) // 32



// Activity 3: Palindrome Number
// Task 3: Solve the "Palindrome Number" problem on LeetCode,
// Write a function that takes an Integer and returns true if it is a palindrome, and false otherwise.
// Log the result for a few test cases, including edge cases like negative numbers.

const checkPalindrome = (n)=>{
    let number = n
    let d,sum = 0
    let isNegtive = n<0? true:false
    if(isNegtive) n = n * -1
    while( n !== 0){
        d = n % 10
        sum = sum*10 + d
        n= Math.floor(n / 10)
    }
    if(sum > 2**31) return 0
    let reversed = isNegtive ? sum *-1 : sum 
    return number === reversed
}

console.log(checkPalindrome(-121))


// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked Usts and log the merged list.
// Definition for singly-linked list.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Function to merge two sorted linked lists
let mergeTwoLists = function(l1, l2) {
    let fh = new ListNode(-1);
    let current = fh;
    while (l1 || l2) {
        if (l2 == null || (l1 !== null && l1.val <= l2.val)) {
            fh.next = l1;
            fh = fh.next;
            l1 = l1.next;
        } else {
            fh.next = l2;
            fh = fh.next;
            l2 = l2.next;
        }
    }
    return current.next;
};

// Helper function to convert array to linked list
function arrayToList(array) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of array) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array
function listToArray(list) {
    let array = [];
    while (list !== null) {
        array.push(list.val);
        list = list.next;
    }
    return array;
}

// Test the solution
let l1 = arrayToList([1, 3, 5]);
let l2 = arrayToList([2, 3, 4]);

let mergedList = mergeTwoLists(l1, l2);
let mergedArray = listToArray(mergedList);

console.log(mergedArray); // Output should be [1, 2, 3, 3, 4, 5]


// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters '(', ')', '{', '[', ']' and determines if the input string is valid.
// string is valid if open brackets are closed in the correct order. A Log the result for a few test cases.
function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in map) {
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

// Test cases
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([)]"));     // false
console.log(isValid("{[]}"));     // true
console.log(isValid("{[()]}"));   // true
console.log(isValid("{[}]"));     // false
