/*
The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

Examples (in JavaScript):

hamming("I like turtles","I like turkeys")  //returns 3
hamming("Hello World","Hello World")  //returns 0
You can assume that the two input strings are of equal length.
*/

// My Solution
const hamming = (a,b) =>{
  return a.split('').reduce((acc,rec,i) => rec !== b[i] ? acc + 1 : acc, 0)
}

// Better Solution
function hamming(a,b) {
  return a.split('').filter(function(v,i) {return a[i]!=b[i]}).length;
}

// Another Solution
const hamming = (a,b) => [...a].reduce((s,n,i)=> s + (a[i] != b[i]),0);
