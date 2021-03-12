/*
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
*/

// My Solution
const sumIntervals = intervals => {
  return intervals.reduce((acc, rec) => {
    Array.from({ length: rec[1] - rec[0] }, (v, k) => k + rec[0])
      .map(it => {
        return acc.indexOf(it) === -1 ? acc.push(it) : acc
      });
    return acc
  },[]).length
}

// Better Solution
function sumIntervals(intervals){
  return intervals
    .sort(function(a, b){
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    })
    .reduce(function(acc, interval) {
      if (interval[1] > acc.top) {
        acc.total += interval[1] - Math.max(interval[0], acc.top);
      }
      acc.top = Math.max(interval[1], acc.top);
      return acc;
    }, {total: 0, top: 0})
    .total;
}

// Another Solution
function sumIntervals(intervals){
  var numbers = [];
  intervals.forEach( function(interval) {
    for (var i = interval[0] ; i < interval[1] ; i++) {
      if (numbers.indexOf(i) == -1) numbers.push(i);
    }
  });
  return numbers.length;
}

// Another Solution
function sumIntervals(intervals){
  var numbers = {};
  intervals.forEach(function(x) {
    for (var i = x[0]; i < x[1]; i++) {
      numbers[i] = i;
    }
  });
  return Object.keys(numbers).length;
}

// Another Solution
function sumIntervals(intervals) {
  const ranges = new Set();
  
  intervals.forEach(([start, end]) => {
    for (let i = start; i < end; i++) ranges.add(i);
  });
  
  return ranges.size;
}

// Another Solution
function sumIntervals(intervals){
  return Object.keys(intervals.reduce(function(hash, interval) {
    for(var i = interval[0]; i < interval[1]; i++) hash[i] = 1;
    return hash;
  }, {})).length;
}

// Another Solution
const sumIntervals = intervals => (
  new Set(intervals.reduce((arr, [start, end]) =>
    [...[...Array(end - start)].map((_, i) => i + start), ...arr], [])).size
);
