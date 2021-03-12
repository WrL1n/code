/*
Implement a function that normalizes out of range sequence indexes (converts them to 'in range' indexes) by making them repeatedly 'loop' around the array. The function should then return the value at that index. Indexes that are not out of range should be handled normally and indexes to empty sequences should return undefined/None depending on the language.

For positive numbers that are out of range, they loop around starting at the beginning, so

normIndex(arr, arr.length);     //Returns first element
normIndex(arr, arr.length + 1); //Returns second element
normIndex(arr, arr.length + 2); //Returns third element
//And so on...
normIndex(arr, arr.length * 2); //Returns first element
For negative numbers, they loop starting from the end, so

normIndex(arr, -1);    //Returns last element
normIndex(arr, -2);    //Returns second to last element
normIndex(arr, -3);    //Returns third to last element
//And so on...
normIndex(arr, -arr.length); //Returns first element
*/

// My Solution
const normIndex = (arr, i) => arr.slice(i % arr.length)[0]

// Better Solution
const normIndex = (arr, i) => arr[((i < 0 ? arr.length : 0) + i % arr.length) % arr.length];


// Another Solution
function normIndex(array, index){
  let normedIndex = index % array.length;
  if(normedIndex < 0) {
    normedIndex += array.length;
  }
  return array[normedIndex];
}

// Another Solution
const normIndex = (arr, idx) => {
  return idx > 0 ? arr[idx % arr.length] :
         idx < 0 ? arr[arr.length - -idx % arr.length] || arr[0] :
         idx < arr.length ? arr[idx] : undefined;
}

// Another Solution
let mod = (a, b) => (a % b + b) % b

function normIndex(array, index){
  return array[mod(index, array.length)]
}
