/*
Modify the spacify function so that it returns the given string with spaces insertedbetween each character.
*/

// My Solution
const spacify = str => str.split('').join(' ')

// Better Solution
function spacify(str) {
  return str.split("").join(" ");
}

// Another Solution
const spacify = str => [...str].join(' ');
