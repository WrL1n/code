/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

// My Solution
const summation = num => new Array(num).fill(null).reduce((acc, rec, i) => {
  return acc + i + 1
}, 0)

// Better Solution
const summation = n => n * (n + 1) / 2

// Another Solution
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}

// Another Solution
var summation = function f(num) {
  return num ? num + f(num-1) : 0;
}

// Another Solution
var summation = function (num) {
  let i = 1, s=1;
  while(i++<num) {s+=i}
  return s
}

// Another Solution
var summation = function (num) {
  for (var i=0, s=0; i <= num; i++){
    s+=i
  }
  return s;
}
