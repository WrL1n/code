/*
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/

// My Solution
const nthFibo = n =>{
  let arr = [0,1]

  if (n <= 1) return n-1

  for (let i = arr.length; i <= n; i++){
    arr.push(arr[i-1] + arr[i-2])
  }
  return arr[n-1]
}

// Better Solution
function nthFibo(n) {
  return Math.round((1/Math.sqrt(5))*Math.pow((1+Math.sqrt(5))/2,n-1))
}

// Another Solution
function nthFibo(n) {
  if (n === 1 || n === 2) return (n - 1);

  return (nthFibo.alreadyComputed[n] || 
      (nthFibo.alreadyComputed[n] = (nthFibo(n - 1) + nthFibo(n - 2))));
}
nthFibo.alreadyComputed = [];
