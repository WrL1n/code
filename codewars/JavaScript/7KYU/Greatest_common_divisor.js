/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

// My Solution
const mygcd = (x,y) => y == 0 ? x : mygcd(y, x % y)

// Better Solution
function mygcd(x,y){
  return y == 0 ? x : mygcd(y, x % y)
}

// Another Solution
function mygcd(x, y) {
  while(y) var t = y, y = x % y, x = t;
  return x;
}
