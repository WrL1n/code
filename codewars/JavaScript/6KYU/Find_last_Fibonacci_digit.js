/*
Just like in the "father" kata, you will have to return the last digit of the nth element in the Fibonacci sequence (starting with 1,1, to be extra clear, not with 0,1 or other numbers).

You will just get much bigger numbers, so good luck bruteforcing your way through it ;)

lastFibDigit(1) == 1
lastFibDigit(2) == 1
lastFibDigit(3) == 2
lastFibDigit(1000) == 5
lastFibDigit(1000000) == 5
*/

// My Solution
const lastFibDigit = n =>{
  let arr = [1,1], k = 0
  if (n <= 1) return n
  
  for (let i = arr.length; i <= (n % 60); i++){
    arr.push((arr[i-1] + arr[i-2]) % 10)
  }
  return arr[(n % 60) - 1]
}

// Better Solution
const lastFibDigit = (function() {
  const LAST_DIGIT = [
    0, 1, 1, 2, 3, 5, 8, 3, 1, 4, 
    5, 9, 4, 3, 7, 0, 7, 7, 4, 1, 
    5, 6, 1, 7, 8, 5, 3, 8, 1, 9, 
    0, 9, 9, 8, 7, 5, 2, 7, 9, 6, 
    5, 1, 6, 7, 3, 0, 3, 3, 6, 9, 
    5, 4, 9, 3, 2, 5, 7, 2, 9, 1,
  ]

  // The sequence of final digits in Fibonacci numbers repeats in cycles of 60.
  return index => LAST_DIGIT[index % 60]
})()

// Another Solution
function lastFibDigit(n) {
  const fib = new Array(61).fill(0)
  
  fib[0] = 0
  fib[1] = 1 

  for (let i = 2; i < 61; i++) 
    fib[i] = (fib[i - 1] + fib[i - 2]) % 10
    
  return fib[n % 60]
}

// Another Solution
function lastFibDigit(n) {
  for (var i = 0, arr = [1,1]; i < 58; i++) {
    arr.push(arr[arr.length-1] + arr[arr.length-2]);
  }
  return parseInt(arr[(n-1)%60].toString().split('').pop());
}
