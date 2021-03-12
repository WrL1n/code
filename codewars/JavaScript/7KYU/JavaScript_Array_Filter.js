/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

// My Solution
const getEvenNumbers = numbersArray => numbersArray.filter(it => !(it % 2))

// Better Solution
function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
}

// Another Solution
function getEvenNumbers(n){
  return n.filter(a=>(a&1)==0)
}
