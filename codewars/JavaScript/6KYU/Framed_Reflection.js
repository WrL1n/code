/*
100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:
'*********\n* olleH *\n* dlroW *\n*********'

Words in your solution should be left-aligned.
*/

// My Solution
const mirror = text => {
  const reversedText = text.split(' ').reduce((acc, rec) => acc.concat(rec.split('').reverse().join('')),[])
  const maxLengthWord = Math.max(...reversedText.map(it => it.length))
  return `${'*'.repeat(maxLengthWord + 4)}${reversedText.reduce((acc, rec) => {
            return acc += '\n*' + ` ${rec}` + `${' '.repeat(1 + maxLengthWord - rec.length)}` + '*'
          },'')}${'\n' + '*'.repeat(maxLengthWord + 4)}`
}

// Better Solution
function mirror(s){
  let a = s.split(' ');
  let m = Math.max(...a.map(x=>x.length));
  a = a.map(x=>'* '+[...x].reverse().join('')+' '.repeat(m-x.length)+' *');
  return ['*'.repeat(m+4),...a,'*'.repeat(m+4)].join('\n');
}

// Another Solution
function mirror(text) {
  const words = text.split(' ');
  const width = Math.max.apply(null, words.map(w => w.length));
  const tb = '*'.repeat(width + 4);
  const revs = words.map(w => `* ${Array.from(w).reverse().join('')}${' '.repeat(width - w.length)} *`).join('\n');
  return `${tb}\n${revs}\n${tb}`;
}
