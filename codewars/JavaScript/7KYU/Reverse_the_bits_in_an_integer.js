/*
Write a function that reverses the bits in an integer.
For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
You can assume that the number is not negative.
*/

// My Solution
const reverseBits = n => parseInt(n.toString(2).split('').reverse().join(''), 2)

// Better Solution
function reverseBits(n) {
  const binaryReverse = n.toString(2).split('').reverse().join('')
  return parseInt(binaryReverse, 2)
}

// Another Solution
reverseBits=n=>parseInt([...n.toString(2)].reverse().join``,2)
