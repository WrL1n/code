/*
Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

// My Solution
const findOdd = A => A.reduce((acc, rec) => (A.filter(it => it === rec).length % 2 === 1) ? acc = rec : acc,0)

// Better Solution
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// Another Solution
function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

// Another Solution
function findOdd(arr) {
  var result, num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}

// Another Solution
function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}
