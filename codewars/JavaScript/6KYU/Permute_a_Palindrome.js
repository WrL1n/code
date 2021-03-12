/*
Write a function that will check whether the permutation of an input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

Example
madam -> True
adamm -> True
junk -> False

Hint
The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/

// My Solution
const permuteAPalindrome = input => {
  return [...new Set(input)].reduce((acc, rec) => {
    return input.split('').filter(it => it === rec).length % 2 ? acc + 1 : acc
  }, 0) <= 1
}

// Better Solution
function permuteAPalindrome (input) {

  res = 0;
  for (var i = 0; i < input.length; i++) {
    res ^= 1 << (input[i].charCodeAt(0) - 71);
  }
  return res == (res & -res);

}

// Another Solution
function permuteAPalindrome (input) {
  return input
    .split('')
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join('')
    .replace(/(.)\1/g, '')
    .length <= 1;
}

// Another Solution
function permuteAPalindrome(input) {
  return [...input].sort().join('').replace(/(\w)\1/g, '').length <= 1;
}
