/*
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
*/

// My Solution
const swapValues = (arr) => arr.reverse()

// Better Solution
function swapValues() {
  return arguments[0].reverse();
}

// Another Solution
function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}
