/*

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

*/

// My Solution
divisibleBy = (numbers, divisor) => numbers.filter(number => number % divisor === 0)

// Better Solution
function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}

// Another Solution
const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));
