/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
*/

// My Solution
const capitalize = s => s.split('').reduce((acc, rec, i) => {
  return [
    acc[0] + (i % 2 ? rec.toLowerCase() : rec.toUpperCase()),
    acc[1] + (i % 2 ? rec.toUpperCase() : rec.toLowerCase())
  ]
},['',''])

// Better Solution
function capitalize(s){
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
};

// Another Solution
function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};

// Another Solution
function capitalize(s){
  return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
          [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
}

// Another Solution
const cap = (str, isEven) => str.split('').map( (a, i) => isEven && i % 2 === 0 || !isEven && i % 2 === 1? a.toUpperCase(): a.toLowerCase()).join('');

function capitalize(s){
  return [cap(s, true), cap(s, false)]
};
