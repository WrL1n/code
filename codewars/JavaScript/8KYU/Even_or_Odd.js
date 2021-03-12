/*
Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// My Solution
const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd';

// Better Solution
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

// Another Solution
function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
