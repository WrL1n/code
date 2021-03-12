/*
You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that *"the"* is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like *"as"* at the beginning of the sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other count as one.

Example:

"dog cat"                 --> 0
"dog DOG cat"             --> 1
"apple dog cat"           --> 0
"pineapple apple dog cat" --> 0
"apple     apple dog cat" --> 1
"apple dog apple dog cat" --> 0
"dog dog DOG dog dog dog" --> 1
"dog dog dog dog cat cat" --> 2
"cat cat dog dog cat cat" --> 3
*/

// My Solution
const countAdjacentPairs = str => {
  let flag = false
  return str.toLowerCase().split(' ').reduce((acc, rec, i, arr) => {
    if( !i ) { return 0 }
    if( rec === arr[i-1] && !flag ) {
      flag = !flag
      return acc += 1
    }
    if( rec !== arr[i-1] && flag ) { flag = !flag }
    return acc
  },0)
}

// Better Solution
const countAdjacentPairs=(s)=>(s.match(/(\b\w+\s*\b)\1+/gi)||[]).length

// Another Solution
const countAdjacentPairs = s => s
  .split` `
  .map(e => e.toLowerCase())
  .reduce((r, e, _, a) => r.includes(e) ? r : a.indexOf(e) === a.lastIndexOf(e) ? r : r.concat(e), [])
  .length;

// Another Solution
function countAdjacentPairs(s) {
  var res = s.match(/(\b\w+)\s\1/ig);
  return res == null ? 0 : res.length;
}

// Another Solution
countAdjacentPairs=s=>((s+' ').match(/(\b.+\b)\1+/gi)||[]).length

// Another Solution
function countAdjacentPairs(s) {
  let r = s.match(/\b(\w+)\b(\s\b\1\b)+/ig);
  return r == null ? 0 : r.length;
}

// Another Solution
function countAdjacentPairs(searchString) {
  let arr = searchString.toLowerCase().split(" ");
  let uniqArr = []; 
  for(let i = 0; i < arr.length; i++){
    if( arr[i] == arr[i + 1] && arr[i + 1] != arr[i + 2]){
      uniqArr.push(arr[i]);
    }
  }
  return uniqArr.length;
}

// Another Solution
function countAdjacentPairs(searchString) {
  const words = searchString.split(' ').map((word) => word.toLowerCase());
  let currentWord;
  let count = 0;

  for (let i = 0; i < words.length - 1; i++) {
    if (words[i] !== currentWord) {
      currentWord = words[i];
      if (words[i] === words[i + 1]) {
        count++;
      }
    }
  }

  return count;
}

// Another Solution
function countAdjacentPairs(s) {
  s = s.toLowerCase().replace(/\s+/g, ' ');
  let r = s.match(/\b(\w+)\b\s\b\1\b(\s\b\1\b)*/g);
  return (r == null ? 0 : r.length);
}
