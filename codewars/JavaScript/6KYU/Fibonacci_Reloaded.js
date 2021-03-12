/*
And here is Fibonacci again. This time we want to go one step further. Our fib() function must be faster! Can you do it?

In case you don't know, what the Fibonacci number is:

The nth Fibonacci number is defined by the sum of the two previous Fibonacci numbers. In our case: fib(1) == 0 and fib(2) == 1. With these initial values you should be able to calculate each following Fibonacci number.

Examples:

fib(1) // === 0
fib(2) // === 1
fib(3) // === 1
fib(4) // === 2
fib(5) // === 3
*/

// My Solution
const fib = n =>{
  let arr = [0,1]

  if (n <= 1) return n - 1

  for (let i = arr.length; i <= n-1; i++){
      arr.push(arr[i-1] + arr[i-2])
  }
  return arr[n-1]
}

// Better Solution
function fib(n) {
  var [x, y] = [0, 1];
  for (let i = 1; i < n; i++) [x, y] = [y, x + y];
  return x;
}

// Another Solution
function fib(n) {
  return Math.round(Math.pow( 1.618033988749895   , n - 1)  / 2.23606797749979 );
}