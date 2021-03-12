/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/

// My Solution
const pyramid = n => Array.from({length:n},(x, i)=>Array(i + 1).fill(1))

// Better Solution
function pyramid(n) {
  const res = [];
  for(let i = 0; i < n; i++){
    res.push([...Array(i+1)].fill(1))
  }
  return res;
}

// Another Solution
function pyramid(n) {
  return Array(n).fill().map((e,i)=>Array(i+1).fill(1))
}

// Another Solution
const pyramid = n => Array(n).fill(1).map((x, i) => Array(i + 1).fill(1))
