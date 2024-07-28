// Day 16: Recursion

// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases. 

const calFactorial = (n)=>{
    if(n<=1) return 1
    else return (n * calFactorial(n-1))
}
console.log(`Factorial of 5: ${calFactorial(5)}`)  // Factorial of 5: 120
console.log(`Factorial of 6: ${calFactorial(6)}`) // Factorial of 6: 720


//Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

const fibbonacci = (n)=>{
    if (n<2) return n
    return fibbonacci(n-1) + fibbonacci(n-2)
}

console.log(`7th fibbonaci number : ${fibbonacci(7)}`) // 7th fibbonaci number : 13

// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

const sumOfArray = (arr)=>{
if(arr.length === 1) return arr[0]
 return arr.pop() + sumOfArray(arr) 
}
console.log(sumOfArray([1,2,3,4,5,6])) //21

// Task 4: Write a recursive function to find the maximum element in an array, Log the result for a few test cases.


const maxOfArray = (arr)=>{
    if (arr.length === 1) {
        return arr[0]
    }
    return Math.max(arr[arr.length - 1],maxOfArray(arr.slice(0,-1)))
}
console.log(maxOfArray([1,2,3,14,5,6])) // 14


// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

const reverseSring = (str)=>{
    if (str.length === 1) {
        return str[0]
    }
    return (str[str.length-1] + reverseSring(str.slice(0,-1)))
}
console.log(reverseSring('ABCDEF')) // FEDCBA

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

const checkPalindrome = (str)=>{

    if (str.length <=  1) {
        return true
    }
    if(str[0] !== str[str.length-1]){
        return false
    }
    return checkPalindrome(str.substring(1,str.length-1))
}

console.log(checkPalindrome('ABBA')) // true 

// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases. 

const recursiveBinarySearch = (arr, x, low = 0, high = arr.length - 1) => {
    if (low > high) {
        return 'Not Found'; // Base case: element is not found
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) {
        return mid; // Element is found
    } else if (arr[mid] > x) {
        return recursiveBinarySearch(arr, x, low, mid - 1); // Search in the left half
    } else {
        return recursiveBinarySearch(arr, x, mid + 1, high); // Search in the right half
    }
};

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 4));  // Output: 3
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 1));  // Output: 0



//Task 8: Write a recursive function to count the occurrences of a target element in an array, Log the result for a few test cases.

const findOccurence = (arr, x) => {
    if (arr.length === 0) {
        return 0; // Base case
    }
    const count = arr[arr.length - 1] === x ? 1 : 0;
    // Recursively call findOccurence on the array excluding the last element
    return count + findOccurence(arr.slice(0, -1), x);
};

console.log(findOccurence([12, 1, 4, 3, 12, 3, 1, 2, 12], 12)); // Output: 3
console.log(findOccurence([1, 2, 3, 4, 5], 3)); // Output: 1


// Activity 5: Tree Traversal (Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited. 

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const inOrderTraversal = (node) => {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left); // Visit left subtree
    console.log(node.value); // Visit root node
    inOrderTraversal(node.right); // Visit right subtree
};

// Example usage:
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root);
// 4, 2, 5, 1, 3



//Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
const calculateDepth = (node) => {
    if (node === null) {
        return 0; // Base case: if node is null, depth is 0
    }
    const leftDepth = calculateDepth(node.left); // Calculate depth of left subtree
    const rightDepth = calculateDepth(node.right); // Calculate depth of right subtree
    return Math.max(leftDepth, rightDepth) + 1; // Depth is max of left and right depths plus 1 for the current node
};

// Example usage:
let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.left.left.left = new TreeNode(6);

console.log(calculateDepth(root2)); // output: 4
