/*
As you probably know, Fibonacci sequence are the numbers in the following integer sequence: 1, 1, 2, 3, 5, 8, 13... Write a method that takes the index as an argument and returns last digit from fibonacci number. Example: getLastDigit(15) - 610. Your method must return 0 because the last digit of 610 is 0. Fibonacci sequence grows very fast and value can take very big numbers (bigger than integer type can contain), so, please, be careful with overflow.
*/

// My Solution
const getLastDigit = n =>{
  let arr = [0,1]

  if (n <= 1) return n;
  for (let i = arr.length; i <= n; i++){
      arr.push((arr[i-1] + arr[i-2]) % 10)
  }
  return arr[n]
}

// Better Solution
function getLastDigit(n) {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; ++i) {
    [a, b] = [b, (a+b) % 10];
  }
  return a;
}

// Another Solution
const getLastDigit = index => [0,1,1,2,3,5,8,3,1,4,5,9,4,3,7,0,7,7,4,1,5,6,1,7,8,5,3,8,1,9,0,9,9,8,7,5,2,7,9,6,5,1,6,7,3,0,3,3,6,9,5,4,9,3,2,5,7,2,9,1][index%60];

