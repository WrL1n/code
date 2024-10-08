/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// My Solution
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// Better Solution
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// Another Solution
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

// Another Solution
function longest(s1, s2) {
  return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}

// Another Solution
function longest(s1, s2) {
  return (s1+s2).split('').sort().filter((a,b,c)=>a!==c[b-1]).join('');
}
