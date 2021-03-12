/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// My Solution
const duplicateEncode = word => {
  const wordLowerCase = word.toLowerCase()
  const splitWordLowerCase = wordLowerCase.split('')

  const obj = [...new Set(wordLowerCase)].reduce((acc, rec) => {
    return Object.assign(acc, { [rec]: splitWordLowerCase.filter(it => it === rec).length })
  }, {})

  return splitWordLowerCase.reduce((acc, rec) => obj[rec] > 1 ? acc + ')' : acc + '(', '')
}

// Better Solution
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

// Another Solution
function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

// Another Solution
function duplicateEncode(word) {
  var letters = word.toLowerCase().split('')
  return letters.map(function(c, i) {
    return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
  }).join('')
}

// Another Solution
const duplicateEncode = s => s
  .toLowerCase()
  .split``
  .map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
  .join``;

// Another Solution

function duplicateEncode(word){
  return word.toLowerCase().replace(/./g, function(match) { return word.toLowerCase().split(match).length > 2 ? ')' : '(' ;});
}
