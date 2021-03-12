/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/

// My Solution
const dup = s => {
  return s.map(it => {
    return it.split('').reduce((acc, rec, i) => {
      return acc[acc.length - 1] !== rec ? acc + rec : acc
    }, '')
  })
}

// Better Solution
function dup(s) {
  return s.map(x => x.replace(/(.)\1+/g,'$1'))
};

// Another Solution
function dup(s) {
  return s.map(w => {
    return w.split('').filter((c, i, arr) => {
      return c !== arr[i - 1];
    }).join('');
  });
};

// Another Solution
function dup(s) {
  return s.map(x => x.replace(/[^\w\s]|(.)(?=\1)/gi, ""));
}

// Another Solution
function dup(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(removeDuplicate(arr[i]));
  }
  return result;
};

function removeDuplicate(str) {
  let word = '';
  for (let i = 0; i < str.length ; i++) {
    if (str[i - 1] !== str[i]) {
      word += str[i];
    }
  };
  return word;
};
