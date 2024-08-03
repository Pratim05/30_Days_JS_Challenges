// Day 22: LeetCode Medium

// Activity 1: Add Two Numbers
// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked lists and log the sum as a linked list.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
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

const addTwoNumbers = (l1,l2)=>{
    let newNode = new ListNode(0);
    let head = newNode
    let carry = 0

    while (l1 || l2) {
        let a = l1 ? l1.val : 0
        let b = l2 ? l2.val : 0
        let sum = a + b + carry

        carry = Math.floor(sum/10)
        head.next = new ListNode(sum%10)

        if(l1) l1 = l1.next
        if(l2) l2 = l2.next

        head = head.next
    }
    if(carry > 0) head.next = new ListNode(carry)

    return newNode.next;
}

// Test the solution
let l1 = arrayToList([1, 3, 5]);
let l2 = arrayToList([2, 3, 4]);
let resultList = addTwoNumbers(l1,l2)
let resultArray = listToArray(resultList)
console.log(resultArray) // [ 3, 6, 9 ]


// Activity 2: Longest Substring Without Repeating Characters
// Task 2: Solve the "Longest Substring Without Repeating Characters problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.

const longestUniqueSubsttr = (str) => {
    let res = 0;
    let lastIndex = new Array(256).fill(-1);

    let i = 0;
    for (let j = 0; j < str.length; j++) {
        i = Math.max(i, lastIndex[str.charCodeAt(j)] + 1);
        res = Math.max(res, j - i + 1);
        lastIndex[str.charCodeAt(j)] = j;
    }
    return res;
}

// Test cases
console.log(longestUniqueSubsttr('PratimisPratim')); // Output: 7 ("ratimis" or "timiPr")
console.log(longestUniqueSubsttr('abcabcbb')); // Output: 3 ("abc")
console.log(longestUniqueSubsttr('bbbbb')); // Output: 1 ("b")
console.log(longestUniqueSubsttr('pwwkew')); // Output: 3 ("wke")
console.log(longestUniqueSubsttr('')); // Output: 0 (empty string)
console.log(longestUniqueSubsttr(' ')); // Output: 1 (single space)



// Activity 3: Container With Most Water

// Task 3: Solve the "Container With Most Water" problem on LeetCode,
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container,
// such that the container holds the most water. Log the maximum amount of water for a few test cases.

const maxArea = (height) => {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const currentWater = width * minHeight;
        maxWater = Math.max(maxWater, currentWater);

        // Move the pointer pointing to the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1
console.log(maxArea([4, 3, 2, 1, 4])); // Output: 16
console.log(maxArea([1, 2, 1])); // Output: 2
console.log(maxArea([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 20



// Activity 4: 35um
// Task 4: Solve the "Sum" problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// Log the triplets for a few test cases, including edge cases.

const Sum = (nums) => {
    nums.sort((a, b) => a - b); // Sort the array
    const triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for left and right
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

// Test cases
console.log(Sum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(Sum([])); // Output: []
console.log(Sum([0])); // Output: []
console.log(Sum([0, 0, 0, 0])); // Output: [[0, 0, 0]]
console.log(Sum([-2, 1, 1])); // Output: [ [ -2, 1, 1 ] ]

// Activity 5: Group Anagrams
// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.
const groupAnagrams = (strs) => {
    const map = new Map();

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams([""])); 
// Output: [[""]]

console.log(groupAnagrams(["a"])); 
// Output: [["a"]]

console.log(groupAnagrams(["abc", "bca", "cab", "cba", "bac", "acb"])); 
// Output: [["abc", "bca", "cab", "cba", "bac", "acb"]]

console.log(groupAnagrams(["abcd", "bcda", "dabc", "cdba", "a", "b"])); 
// Output: [["abcd", "bcda", "dabc", "cdba"], ["a"], ["b"]]
