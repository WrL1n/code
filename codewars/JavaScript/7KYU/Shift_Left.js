/*
You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

For Example:

By applying a move to the string "where", the result is the string "here".
By applying a move to the string "a", the result is an empty string "".
Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

Notes
Both strings consist of lowercase latin letters.
If the string is already empty, you cannot perform any more delete operations.
*/

// My Solution
const shiftLeft = (s,t) => {
  //   const longestStr = s.length > t.length ? s : t
  //   const shortStr = t.length < s.length ? t : s
  //   const matches = longestStr.split('').reverse().reduce((acc, rec, i) => {
  //     return (rec === shortStr.split('').reverse()[i]) ? acc + 1 : acc     // if false need break reduce and return acc
  //   }, 0)
  //   return s.length + t.length - matches * 2

    let i = s.length, j = t.length;
    while (i >= 0 && j >= 0 && s[i] === t[j])
      i--, j--;
    return (i + 1) + (j + 1);
  }

// Better Solution
function shiftLeft(s, t) {
  let i = s.length, j = t.length;
  while (i >= 0 && j >= 0 && s[i] == t[j])
    i--, j--;
  return (i + 1) + (j + 1);
}

// Another Solution
function shiftLeft(s, t){
  let count = 0;
  while (s != t){
    s.length > t.length ? s = s.slice(1) : t = t.slice(1);
    count++
  }
  return count
}
