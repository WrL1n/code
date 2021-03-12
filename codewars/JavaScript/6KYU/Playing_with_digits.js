/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

// My Solution
const digPow = (n, p) =>{
  const arrChars = n.toString().split('')

  const sum = arrChars.reduce((acc, rec, i) => {
    return acc + (+rec)**(i + p)
  }, 0)

  const arr = arrChars.map(it => sum / n)

  return arr.toString().includes('.') ? -1 : arr[0]
}

// Better Solution
function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}

// Another Solution
function digPow(n, p){
  var ans = (''+n).split('')
    .map(function(d,i){return Math.pow(+d,i+p) })
    .reduce(function(s,v){return s+v}) / n
  return ans%1 ? -1 : ans
}//z.

// Another Solution
function digPow(n, p){
  var ans = n.toString().split('')
             .map((v,i) => Math.pow(parseInt(v), i+p))
             .reduce((a,b) => a+b) / n;
  return ans%1 == 0 ? ans : -1;
}


// Another Solution
function digPow(n, p){
  let total = Reflect.apply(Array.prototype.reduce,
    Reflect.apply(Array.prototype.map, n.toString(), [(i) => parseInt(i)]),
  [(prev, curr, i) => prev + Math.pow(curr, i + p), 0]);

  let division = total / n;

  if(total % n > 0) {
    return -1;
  }

  return division;
}

// Another Solution
function digPow(num, pow) {
  const raisedAndSummed = num.toString()
                             .split('')
                             .map(n => Math.pow(n, pow++))
                             .reduce((sum, n) => sum + n, 0)
  return (raisedAndSummed % num === 0) ? raisedAndSummed / num : -1
}
