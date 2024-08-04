// Day 23: LeetCode Hard

// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of Integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.

const medianOfArrays = (arr1,arr2)=>{
    let mergedArray = arr1.concat(arr2)
    let sortedMergedArray = mergedArray.sort((a,b)=>a-b)
    // console.log(sortedMergedArray)
    let l =  mergedArray.length

    let median = l % 2 === 0 ? (sortedMergedArray[(l/2)] + sortedMergedArray[(l/2)-1] ) / 2 : sortedMergedArray[(l/2)] 
    return median
}
console.log(medianOfArrays([1,2,3,4],[3,4,5,6])) // 3.5

// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list. Create a few test cases with linked lists and log the merged list.

class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  let mergeKLists = function (lists) {
      // Initialise an array to store the values in
      let mainArray = [];
  
      function addLinkedListToMainArray(subArray) {
          // Push value of the LinkedList's current node to the main array
          mainArray.push(subArray.val);
  
          // Add the next node in the LinkedList
          if (subArray.next != null) {
              addLinkedListToMainArray(subArray.next);
          }
      }
  
      // Loop through the supplied LinkedLists
      for (let i = 0; i < lists.length; i++) {
          // Check if the LinkedList is empty
          if (lists[i] != null) {
              // Add the LinkedList's contents to the main array
              addLinkedListToMainArray(lists[i]);
          }
      }
  
      // Sort the main array
      mainArray = mainArray.sort((a, b) => a - b);
  
      // Convert the array to a LinkedList
      let newList = null;
      for (let i = mainArray.length - 1; i >= 0; i--) {
          newList = new ListNode(mainArray[i], newList);
      }
  
      return newList;
  };
  
  // Helper function to convert array to ListNode
  function createLinkedList(arr) {
    const dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
      current.next = new ListNode(num);
      current = current.next;
    }
    return dummy.next;
  }
  
  // Helper function to print ListNode
  function printLinkedList(node) {
    const values = [];
    while (node) {
      values.push(node.val);
      node = node.next;
    }
    console.log(values);
  }
  
  // Test cases
  const list1 = createLinkedList([1, 4, 5]);
  const list2 = createLinkedList([1, 3, 4]);
  const list3 = createLinkedList([2, 6]);
  
  const mergedList = mergeKLists([list1, list2, list3]);
  printLinkedList(mergedList); //[1, 1, 2, 3, 4, 4, 5, 6]  

// Activity 3: Trapping Rain Water
// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining. Log the amount of trapped water for a few test cases.

    function maxWater(arr, n)
    {
        // To store the maximum water
        // that can be stored
        let res = 0;

        // For every element of the array
        // except first and last element
        for(let i = 1; i < n - 1; i++)
        {

            // Find maximum element on its left
            let left = arr[i];
            for(let j = 0; j < i; j++)
            {
                left = Math.max(left, arr[j]);
            }

            // Find maximum element on its right
            let right = arr[i];
            for(let j = i + 1; j < n; j++)
            {
                right = Math.max(right, arr[j]);
            }

            // Update maximum water value
            res += Math.min(left, right) - arr[i];
        }
        return res;
    }
    
    let arr = [ 0, 1, 0, 2, 1, 0,
                1, 3, 2, 1, 2, 1 ];
    let n = arr.length;
 
    console.log(maxWater(arr,n)); //6


// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an non chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle. Log the distinct solutions for a few test cases.

function solveNQueens(n) {
    const solutions = [];
    const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
    
    function isValid(board, row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        
        return true;
    }

    function solve(row) {
        if (row === n) {
            solutions.push(board.map(r => r.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';
                solve(row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    solve(0);
    return solutions;
}

function logNQueensSolutions(n) {
    const solutions = solveNQueens(n);
    console.log(`Total solutions for ${n}-Queens: ${solutions.length}`);
    for (const solution of solutions) {
        console.log(solution.join('\n'));
        console.log('');
    }
}

// Test cases
logNQueensSolutions(4);
logNQueensSolutions(5);


// Activity 5: Word Ladder
// Task 5: Solve the "Word Ladder problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.

function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    const allComboDict = {};
    const L = beginWord.length;

    wordList.forEach(word => {
        for (let i = 0; i < L; i++) {
            const newWord = word.substring(0, i) + '*' + word.substring(i + 1);
            if (!allComboDict[newWord]) {
                allComboDict[newWord] = [];
            }
            allComboDict[newWord].push(word);
        }
    });

    const queue = [[beginWord, 1]];
    const visited = { [beginWord]: true };

    while (queue.length > 0) {
        const [currentWord, level] = queue.shift();

        for (let i = 0; i < L; i++) {
            const intermediateWord = currentWord.substring(0, i) + '*' + currentWord.substring(i + 1);

            if (allComboDict[intermediateWord]) {
                for (const word of allComboDict[intermediateWord]) {
                    if (word === endWord) {
                        return level + 1;
                    }

                    if (!visited[word]) {
                        visited[word] = true;
                        queue.push([word, level + 1]);
                    }
                }
            }
        }
    }

    return 0;
}

function logWordLadder(beginWord, endWord, wordList) {
    const length = ladderLength(beginWord, endWord, wordList);
    console.log(`The length of the shortest transformation sequence from "${beginWord}" to "${endWord}" is: ${length}`);
}

// Test cases
logWordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]); // Expected output: 5
logWordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log"]); // Expected output: 0
logWordLadder("a", "c", ["a", "b", "c"]); // Expected output: 2
logWordLadder("lost", "cost", ["most", "fist", "lost", "cost", "host", "fost"]); // Expected output: 2
