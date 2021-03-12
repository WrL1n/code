/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

// My Solution
const iqTest = numbers => {
  const arr = numbers.split(' ').map(it => +it)
  const odds = arr.filter(it => it % 2)
  const evens = arr.filter(it => !(it % 2))
  return odds.length === 1 ? arr.indexOf(odds[0]) + 1 : arr.indexOf(evens[0]) + 1
}

// Better Solution
function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

// Another Solution
function iqTest(numbers){
  var m = numbers.match(/[02468]\b.*[02468]\b/.test(numbers) ? /\d*[13579]\b/ : /\d*[02468]\b/)[0];
  return numbers.split(' ').indexOf(m) + 1;
}

// Another Solution
const iqTest = numbers => {
  numbers = numbers.replace(/(\d+\s)|(\d+$)/g, c => c % 2);
  return numbers.indexOf(numbers.match(/0/g).length > 1 ? '1' : '0') + 1;
}
