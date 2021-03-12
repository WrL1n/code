/*
Given that

f0 = '0'
f1 = '01'
f2 = '010' = f1 + f0
f3 = '01001' = f2 + f1
You will be given a number and your task is to return the nth fibonacci string. For example:

solve(2) = '010'
solve(3) = '01001'
More examples in test cases. Good luck!
*/

// My Solution
const solve = n =>{
  let arr = ['0','01']

  if (n <= 1) return arr[n]

  for (let i = arr.length; i <= n; i++){
      arr.push(arr[i-1] + arr[i-2])
  }
  return arr[n]
}

// Better Solution
const solve = (n) => n === 0 ? '0' : n === 1 ? '01' : solve(n - 1) + solve(n - 2);

// Another Solution
function solve(n){
  return ['0', '01'][n] || solve(n - 1) + solve(n - 2)
}
