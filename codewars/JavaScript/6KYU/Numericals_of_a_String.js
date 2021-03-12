/*
You are given an input string.

For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

But will your code be performant enough?

Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
There might be some non-ascii characters in the string.
*/

// My Solution
const numericals = s => {
  let obj = {}
  return s.split('').map(it => obj[it] = ++obj[it] || 1).join('')
}

// Better Solution
const numericals = (str, seen = {}) =>
  str.replace(/./g, char => 
    seen[char] = (seen[char] || 0) + 1)

// Another Solution
function numericals(input) {
  let obj = {};
  let result = "";
  for (let i = 0; i < input.length; i += 1) {
      let current = input[i];
      if (obj[current]) {
          obj[current] += 1;
      } else {
          obj[current] = 1;
      }

      result += obj[current];
  }

  return result;
}

// Another Solution
const numericals = (s, o = {}) => [...s].map(c=>o[c]? ++o[c]: o[c]=1).join("");
