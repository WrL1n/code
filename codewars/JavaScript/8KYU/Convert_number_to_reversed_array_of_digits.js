/*
Convert number to reversed array of digits
Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

// My Solution
const digitize = n => (n+'').split('').reverse().map(it => +it)

// Better Solution
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

// Another Solution
function digitize(n){
  return (n + '').split('').map(Number).reverse();
}
