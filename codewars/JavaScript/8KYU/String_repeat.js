/*

Write a function called repeatString which repeats the given String src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/

// My Solution
const repeatStr = (n, s) => s.repeat(n)

// Better Solution
function repeatStr (n, s) {
  return s.repeat(n);
}

// Another Solution
repeatStr = (n, s) => s.repeat(n)
