/*
Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

Example:

locate(['a','b',['c','d',['e']]],'e'); // should return true
locate(['a','b',['c','d',['e']]],'a'); // should return true
locate(['a','b',['c','d',['e']]],'f'); // should return false
*/

// My Solution
const locate = (arr, value) => {
  let flatArr = []

  const flat = (arr) => {
    return arr.map(it => Array.isArray(it) ? flat(it) : flatArr.push(it.toString()))
  }

  flat(arr)
  return flatArr.includes(value.toString())
}

// Better Solution
var locate = function(arr, v) {
  return arr.some(function(e) { return Array.isArray(e) ? locate(e, v) : e === v; });
}

// Another Solution
function locate(array, value){
  var queue = array,
      next;
  while(queue.length){
    next = queue.shift();
    if(Array.isArray(next)){
      queue = queue.concat(next);
    } else if(next == value){
      return true;
    }
  }
  return false;
}

// Another Solution
var _ = require("underscore")
var locate = function(arr,value){
    return _.flatten(arr).indexOf(value)>=0
}

// Another Solution
const locate = (a, v) => extract(a).includes(v);
const extract = a => a.reduce((r, e) => r.concat(e.pop ? extract(e): e), []);
