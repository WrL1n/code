/*
The Fibonacci sequence is traditionally used to explain tree recursion.

function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
This algorithm serves welll its educative purpose but it's tremendously inefficient, not only because of recursion, but because we invoke the fibonacci function twice, and the right branch of recursion (i.e. fibonacci(n-2)) recalculates all the Fibonacci numbers already calculated by the left branch (i.e. fibonacci(n-1)).

This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. You may go for a cup of coffee or go take a nap while you wait for the answer. But if you try it here in Code Wars you will most likely get a code timeout before any answers.

For this particular Kata we want to implement the memoization solution. This will be cool because it will let us keep using the tree recursion algorithm while still keeping it sufficiently optimized to get an answer very rapidly.

The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them. When a Fibonacci number is calculated, we first look it up in the cache, if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

Refactor the function into a recursive Fibonacci function that using a memoized data structure avoids the deficiencies of tree recursion Can you make it so the memoization cache is private to this function?
*/

// My Solution
const fibonacci = n =>{
  let arr = [0,1]

  if (n <= 1) return n

  for (let i = arr.length; i <= n; i++){
      arr.push(arr[i-1] + arr[i-2])
  }
  return arr[n]
}

// Better Solution
var fibonacci = (function () {
  var cache = {};
  
  return function(n) {
    
    // Base case
    if(n==0 || n == 1)
        return n;
    
    // Recurse only if necessary
    if(cache[n-2] === undefined)
      cache[n-2] = fibonacci(n-2);
    if(cache[n-1] === undefined)
      cache[n-1] = fibonacci(n-1);
    
    return cache[n-1] + cache[n-2];
  };

// Another Solution
var fibonacci = (function () {
  var mem = [0, 1];
  return function (n) {
    if (mem[n] === undefined)
      mem[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return mem[n];
  };
})();


// Another Solution
var fibonacci = (function(){
  var f = [0, 1];
  return function(n) {
    return f[n] = f[n] || fibonacci(n-1) + f[n-2];
  };
}());

// Another Solution
var memo = [];
function fibonacci(n) {
  if (memo[n]) {
      return memo[n];
  }
  if (n >= 2) {
      return memo[n] = fibonacci(n - 2) + fibonacci(n - 1);
  }
  return n;
}
