/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

// My Solution
const findLongest = arr => arr.reduce((acc, rec) => (rec+'').length > (acc+'').length ? rec : acc, 0)

// Better Solution
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a)

// Another Solution
function findLongest(array){
  return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}

// Another Solution
findLongest = arr => arr.sort((a,b) => (b+'').length - (a+'').length)[0]

// Another Solution
function findLongest(a) {
  return a[a.map(n => ~~Math.log10(n)).indexOf(Math.max(...a.map(n => ~~Math.log10(n))))];
}
