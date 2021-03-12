/*
Write a function to generate 'n' number of fibonacci series (0,1,1,2,3...) in reverse order . The output should be a string of fibonacci series in the reverse order upto the given number.

eg.

reverseFibo(3)  // => '110'
reverseFibo(10) // => '3421138532110'
*/

// My Solution
const reverseFibo = n =>{
  let arr = [0,1]

  if (n <= 1) return n - 1

  for (let i = arr.length; i <= n-1; i++){
      arr.push(arr[i-1] + arr[i-2])
  }

  return arr.reverse().reduce((acc,rec)=>acc+rec.toString(),'')
}

// Better Solution
function reverseFibo(n) {
  if (n == 0) return '0'
  if (n == 1) return '10'

  var result = '10'
  var cache = [0, 1]

  for (var i = 2; i < n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2]
    result = cache[i] + result
  }

  return result
}

// Another Solution
function reverseFibo(n){
  var arr = [0];
  for(i = 1;i < n;i++){
    arr.push(arr[arr.length - 2] ? arr[arr.length - 2] + arr[arr.length - 1] : 1);
  }
  return arr.reverse().join('').toString();
}

// Another Solution
function reverseFibo(n){
  var memo = [0, 1],
      fib = (n) => { if (memo[n] === undefined) memo[n] = memo[n-1] + memo[n-2]; return memo[n]};

  return Array(n).fill(0)
                 .map((_, i) => fib(i))
                 .reverse()
                 .join("");
}
