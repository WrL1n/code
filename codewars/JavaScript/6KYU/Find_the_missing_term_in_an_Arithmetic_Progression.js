/*
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write the function findMissing(list), list will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
*/

// My Solution
const findMissing = list => (list[0] + list[list.length - 1]) * (list.length + 1) / 2 - list.reduce((a, b) => a + b);

// Better Solution
var findMissing = function (list) {
  var step = (list[list.length - 1] - list[0]) / (list.length);
  return list.filter(function(val, index) { return val !== (list[0] + index * step); })[0] - step;
}

// Another Solution
var findMissing = function (list) {  
  var expected_sum = (list[0] + list[list.length - 1]) * (list.length + 1) / 2;
  var sum = list.reduce(function(acc, x) { return acc + x; });
  return expected_sum - sum;
}
