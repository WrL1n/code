/*
Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9
lastDigit("10","10000000000")  // returns 0
Remarks
JavaScript, C++, R, PureScript
Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.
*/

// My Solution
  // const table = [
  //     [0,0,0,0],
  //     [1,1,1,1],
  //     [4,8,6,2],
  //     [9,7,1,3],
  //     [6,4,6,4],
  //     [5,5,5,5],
  //     [6,6,6,6],
  //     [9,3,1,7],
  //     [4,2,6,8],
  //     [1,9,1,9]
  // ]
  // const lastDigit = (a, b) => {
  //   //   if((!+a && !+b) || !+b) return 1
  //   //   return table[+a.slice(-1)][b.slice(-2)%4]
  // }

const table = [0, 0, 0, 0, 1, 1, 1, 1, 6, 2, 4, 8, 1, 3, 9, 7, 6, 4, 6, 4, 5, 5, 5, 5, 6, 6, 6, 6, 1, 7, 9, 3, 6, 8, 4, 2, 1, 9, 1, 9]

const lastDigit = (a, b) => {
  if(!+b) return 1
  return table[4 * +a.slice(-1) + b.slice(-2) % 4]
}

// Better Solution
var lastDigit = function(str1, str2){
  return +!+str2 || Math.pow(str1.slice(-1) % 10, str2.slice(-2) % 4 || 4) % 10
}

// Another Solution
var lastDigit = function(str1, str2){

  // if exponent is 0, return 1

  if (parseInt(str2) === 0) return 1;

  // otherwise...
  // 0 always returns 0
  // 1 always returns 1
  // 2 rotates between 2, 4, 8, 6....
  // 3 rotates between 3, 9, 7, 1....
  // 4 rotates between 4, 6....
  // 5 always returns 5
  // 6 always returns 6
  // 7 rotates between 7, 9, 3, 1....
  // 8 rotates between 8, 4, 2, 6....
  // 9 rotates between 9, 1....

  // because we only need the final digit of str1 to determine the result, let's capture it
  var seed = parseInt(str1.slice(-1)) % 10;
  // at worst, the result of any ending digit rotates through four cases, we need two digits here becasue 111%4 === 11%4 != 1%4
  var exp = parseInt(str2.slice(-2)) % 4;
  if (exp === 0) exp = 4;  // if the exponent is a multiple of 4, we want to use '4', not '0' in our function.


  // so what we can do in shorthand is get the final digit of a number with an exponent of 1-4 and this is enough to predict any case.
  //

  return Math.pow(seed, exp) % 10;
}

// Another Solution
var lastDigit = function(str1, str2){
  return +str2 === 0 ? 1 : Math.pow(+str1.slice(-1), +str2.slice(-2) % 4 + 4) % 10
}

// Another Solution
var lastDigit = (str1, str2) => +!+str2 || Math.pow(str1.slice(-1), str2.slice(-2) % 4 || 4) % 10;

// Another Solution
var lastDigit = function(str1, str2){
  if(str2 == 0){
      return 1;
  }
  var a = str1.charAt(str1.length - 1) - 0;
  var b = str2.slice(str2.length - 2) - 0;
  switch(a){
      case 0:
      case 1:
      case 5:
      case 6:
          return a;
      case 2:
          return [6,2,4,8][b % 4];
      case 3:
          return [1,3,9,7][b % 4];
      case 7:
          return [1,7,9,3][b % 4];
      case 8:
          return [6,8,4,2][b % 4];
      case 4:
          return [4,6][b % 2 == 0 ? 1 : 0];
      case 9:
          return [9,1][b % 2 == 0 ? 1 : 0];
  }
}

// Another Solution
var lastDigit = function(str1, str2){
  str1 = str1.slice(-1);
  str2 = str2.slice(-2);

  return (str2 == "0"? 1: 0) || Math.pow(str1, str2 % 4 || 4) % 10;
}

// Another Solution
function lastDigit(q, q2){
  let a = 0, m = 10, m2 = 4;
  let p = (+q.slice(-1)%m), p2 = ((+q2.slice(-2)%m2||m2)%m);
  a = (+q2) ? Math.pow(p,p2).toString().slice(-1) : 1;
  return +a;
}
