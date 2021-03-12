/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// My Solution (PEPEGA)
const pigIt = str => str.split(' ').map(it => {
  return it === '!'
    ? '!'
    : it === '?'
      ? '?'
      : it.slice(1) + it[0] + 'ay'
}).join(' ')

// Better Solution
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

// Another Solution
pigIt = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ')

// Another Solution
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}

// Another Solution
function pigIt(str){
  return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
}
