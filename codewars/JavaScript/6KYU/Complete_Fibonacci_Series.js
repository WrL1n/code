/*
The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

Example:

fibonacci(4); // should return [0,1,1,2]
fibonacci(-1); // should return []
*/

// My Solution
const fibonacci = n =>{
  if (n <= 0) return []

  let arr = [0,1]

  for (let i = arr.length; i <= n-1; i++){
      arr.push(arr[i-1] + arr[i-2])
  }

  return arr
}

// Better Solution
function fibonacci(n) {
  if (n <= 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0,1];
  var res = fibonacci(n-1);
  res.push(res[res.length-1] + res[res.length-2]);
  return res;
}

// Another Solution
function fibonacci(n) {
  if (n > 0) {
    var results = [0]
    for (var _i = 1; _i <= n -1; _i += 1) {
      if (_i > 2) {
        results.push(results[_i - 1] + results[_i - 2]);
      } else {
        results.push(1);
      }
    }
    return results;
  } else {
    return [];
  }
}
