// Day 18: Algorithms

// Activity 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

const bubbleSort = (array) => {
  let isSwapped;
  do {
    isSwapped = false;
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        isSwapped = true;
      }
    }
  } while (isSwapped);

  return array;
};

console.log(bubbleSort([1, 6, 3, 5, 2, 3, 4])); //[1, 2, 3, 3, 4, 5, 6]

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

const selectionSort = (array) => {
  let min;
  for (let index = 0; index < array.length; index++) {
    min = index;
    for (let j = index + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != index) {
      [array[min], array[index]] = [array[index], array[min]];
    }
  }

  return array;
};

console.log(selectionSort([1, 6, 3, 5, 2, 3, 4])); //[1, 2, 3, 3, 4, 5, 6]

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array,

const quickSort = (array) => {
  if (array.length <= 1) return array;

  const pivot = array[array.length - 1];

  const leftItems = [];
  const rightItems = [];

  for (const item of array.slice(0, array.length - 1)) {
    if (item > pivot) {
      rightItems.push(item);
    } else {
      leftItems.push(item);
    }
  }

  return [...quickSort(leftItems), pivot, ...quickSort(rightItems)];
};

console.log(quickSort([1, 6, 3, 5, 2, 3, 4])); //[1, 2, 3, 3, 4, 5, 6]

// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

const linearSearch = (arr, target) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      return index;
    }
  }
  return `Not Found`;
};
console.log(linearSearch([2, 3, 5, 6, 7, 8, 9], 6));

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

const binarySearch = (arr, x) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }
  return `Not Found`;
};
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 6));

// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

const countOccur = (str) => {
  let result = {};
  for (const c of str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === c) count++;
    }
    if (c === " ") continue;
    result = { ...result, [c]: [count] };
  }
  console.log(result);
};

countOccur("Pratim Bera");

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstringLength(s) {
  let maxLength = 0;
  let start = 0;
  let charSet = new Set();

  for (let end = 0; end < s.length; end++) {
    while (charSet.has(s[end])) {
      charSet.delete(s[start]);
      start++;
    }
    charSet.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  console.log(maxLength);
  return maxLength;
}

longestSubstringLength("abcabcbb"); // Output: 3

// Activity 4: Array Algorithms
// Task B: Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k) {
  k = k % arr.length; // Handle cases where k is larger than the array length

  // Slice and concatenate to create the rotated array
  const rotated = arr.slice(k).concat(arr.slice(0, k));

  console.log(rotated);
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const k = 2;
rotateArray(arr, k); // Output: [3, 4, 5, 1, 2]

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

//Using Array.reduce() and shift method method
function mergeSortedArraysUsingReduce(array1, array2) {
  // Using array.reduce to generate new sorted array
  let singleMergedArray = array1.reduce((outputVar, array1Element) => {
    while (array2.length && array2[0] < array1Element) {
      outputVar.push(array2.shift());
    }
    outputVar.push(array1Element);
    return outputVar;
  }, []);

  return singleMergedArray.concat(array2);
}
let array1 = [1, 2, 3, 5, 9];
let array2 = [4, 6, 7, 8];
const outputArray = mergeSortedArraysUsingReduce(array1, array2);
console.log(outputArray);

// Activity 5: Dynamic Programming (Optional)
// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

function fibonacci(n) {
  if (n <= 1) {
    console.log(n);
    return n;
  }

  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  console.log(fib[n]);
  return fib[n];
}

fibonacci(10);  // Output: 55
fibonacci(15);  // Output: 610



// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.


