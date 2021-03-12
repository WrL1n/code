/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// My Solution
const countBits = n => n.toString(2).split('').filter(it => +it).length

// Better Solution
countBits = n => n.toString(2).split('0').join('').length;

// Another Solution
function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
}

// Another Solution
var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};

// Another Solution
var countBits = function(n) {
  return n !== 0 ? n.toString(2).match(/1/g).length:0;
};

// Another Solution
var countBits = function(n) {
  return n.toString(2).split("").reduce((a,b) => parseInt(a)+parseInt(b),0);
};
