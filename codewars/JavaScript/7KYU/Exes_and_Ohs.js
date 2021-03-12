/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// My Solution
const XO = str => str.split('').reduce((acc, rec) => {
  if (rec.toLowerCase() === 'o') { return acc + 1 }
  if (rec.toLowerCase() === 'x') { return acc - 1 }
  return acc
}, 0) ? false : true

// Better Solution
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// Another Solution
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

// Another Solution
function XO(str) {
  var a = str.replace(/x/gi, ''),
      b = str.replace(/o/gi, '');
  return a.length === b.length;
}

// Another Solution
function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

// Another Solution
function XO(str) {
  return str.replace(/o/ig, '').length == str.replace(/x/ig, '').length
}
