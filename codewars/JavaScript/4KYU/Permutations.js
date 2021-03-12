/*
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
*/

// My Solution
function permutations(string) {
  let results = []

  if (string.length === 1) {
    return [string]
  }

  for (let i = 0; i < string.length; i++) {
    let firstChar = string[i]
    let charsLeft = string.substring(0, i) + string.substring(i + 1)
    let innerPermutations = permutations(charsLeft)

    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }

  return [...new Set(results)]
}

// Better Solution
function permutations(string) {
  var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
  if(string.length == 1) return [string];
  arr.forEach(function(v, i, arr) {
    if(heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
      tmp.push(v);
    }
  });
  return out;
}

// Another Solution
function permutations(str) {
  return (str.length <= 1) ? [str] :
          Array.from(new Set(
            str.split('')
               .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
               .reduce((r, x) => r.concat(x), [])
          ));
}

// Another Solution
const unique = xs => [ ...new Set(xs) ]
const concat = (a, b) => [ ...a, ...b ] 
const drop = i => xs => [ ...xs.slice(0, i), ...xs.slice(i + 1) ]

const permute = (x, i, xs) => 
  combinations(drop(i)(xs)).map(y => x + y)

const combinations = s =>
  s.length === 1 ? [ s ] : [ ...s ].map(permute).reduce(concat)

const permutations = s => unique(combinations(s))

// Another Solution
function permutations(string) {
  return (string.length == 1) ? [string] : string.split('').map(
     (e, i) => permutations(string.slice(0,i) + string.slice(i+1)).map((e2) => e+e2)
  ).reduce((r,e) => r.concat(e)).sort().filter((e,i,a) => (i==0) || a[i-1] != e);
}

// Another Solution
function permutations(string) {
  if (string.length <= 1) {
    return [string];
  }
  var perms = [];
  for (var i = 0; i < string.length; i++) {
    perms = perms.concat(permutations(string.substring(0, i) + string.substring(i + 1)).map(function(e) {
      return string[i] + e;
    }).filter(function(e) {
      return perms.indexOf(e) === -1;
    }));
  }
  return perms;
}

// Another Solution
function permutations(string) {

  let perms = string.split('').reduce((acc, element) => {
    let updatedPerms = new Set();
    acc.forEach((word) => {
      for(let i = 0; i <= word.length; i++) {
        updatedPerms.add(word.substring(0, i) + element + word.substring(i));
      }
    });
    return updatedPerms;
  }, new Set(['']));
  
  return [...perms];
}

// Another Solution
function permutations(chs) {
  return [...new Set(
      Array.from( heapsPerms((chs+'').split('')),
      str => str.join('') )
  )];
}


function *heapsPerms(chs, n = chs.length) {
  if (n <= 1) yield chs.slice();
  else for (let i = 0; i < n; i++) {
      yield *heapsPerms(chs, n-1);
      swap(chs, (n % 2 !== 0) ? 0 : i, n-1);
  }
}


function swap(iterable, i, j) {
  [iterable[i], iterable[j]] = [iterable[j], iterable[i]];
}
