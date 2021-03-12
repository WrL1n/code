/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.
*/

// My Solution
const temp = arr => arr.map(it => [...new Set(it.toLowerCase())].sort().join(''))
const findUniq = arr => {
  return arr[ temp(arr).indexOf(temp(arr).filter((it,_,a) => a.indexOf(it) === a.lastIndexOf(it))[0]) ]
}

// Better Solution
function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3)

  if (!similar(a,b) && !similar(a,c)) return a
  for (d of arr) if (!similar(a,d)) return d
}

function similar (x, y) {
  x = new Set(x.toLowerCase())
  y = new Set(y.toLowerCase())

  if (x.size !== y.size) return false
  for (z of x) if (!y.has(z)) return false

  return true
}

// Another Solution
const unique = (x, i, ar) => ar.indexOf(x) === ar.lastIndexOf(x);

const getUniques = x => [...new Set([...x.toLowerCase()].sort())].join('');

const findUniq = arr => arr[arr.map(getUniques).findIndex(unique)];

// Another Solution
function findUniq(arr) {
  var word = [];
  var res = ""
  var uniq = [...new Set(arr.join("").toLowerCase())].map(n=>(word = arr.filter(v=>v.indexOf(n) != -1),word.length==1) ? res = word.join("") : n);
  return res
}


// Another Solution
function findUniq(arr) {
  var tmp = arr.map(el=>Array.from(new Set(el.toLowerCase().split(''))).sort().join('')),
  str = tmp[0]==tmp[1] ? tmp[0] : tmp[2];
  for(var i = 0; i < arr.length; i++) if(tmp[i]!=str) return arr[i]
}

// Another Solution
const getUnique = (x, i, arr) => arr.indexOf(x) === arr.lastIndexOf(x);
const getUniques = (x) => [...new Set([...x.toLowerCase()].sort())].join('');
const findUniq = (arr) => arr[arr.map(getUniques).findIndex(getUnique)];

