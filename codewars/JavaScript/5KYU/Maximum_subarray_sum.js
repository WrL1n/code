/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

// My Solution
const maxSequence = arr => {
  let max = 0

  arr.reduce((acc, rec) => {
    acc + rec < 0 ? acc = 0 : acc += rec;
    if (acc > max) {max = acc};
    return acc
  }, 0)

//   arr.reduce((acc, rec) => {
//     if (max < acc + rec) max = acc + rec;
//     (acc + rec) < 0 ? acc = 0 : acc += rec;
//     return acc
//   }, 0)
  
  return max
    
//   return arr.reduce((acc,rec) => {
//     (acc[0] + rec) < 0 ? acc[0] = 0 : acc[0] += rec;
//     if (acc[0] > acc[1]) acc[1] = acc[0];
//     return acc
//   }, [0,0])[1]
}

// Better Solution
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

// Another Solution
var maxSequence = function(arr){
  var currentSum = 0;
  return arr.reduce(function(maxSum, number){
      currentSum = Math.max(currentSum+number, 0);
      return Math.max(currentSum, maxSum);
  }, 0);
}

// Another Solution
var maxSequence = function(arr){
  var max = 0;
  var cur = 0;
  arr.forEach(function(i){
    cur = Math.max(0, cur + i);
    max = Math.max(max, cur);
  });
  return max;
}

// Another Solution
var maxSequence = function(arr){
  return Math.max(0,...arr.reduce((a,c) => [Math.max(a[0]+c || c,c),...a],[]))
}

// Another Solution
const maxSequence = (arr, m = arr[0]) => 
  arr.length && +!arr.every(n => n < 0) && arr.reduce((a, b) => Math.max(a, m = Math.max(b, m + b)));

// Another Solution
let maxSequence=a=>
a.reduce((r,b)=>[r[0]=Math.max(r[0]+b, 0), Math.max(r[0], r[1])], [0,0])[1]
