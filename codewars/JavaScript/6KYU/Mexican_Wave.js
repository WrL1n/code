/*
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
Rules
 	1.  The input string will always be lower case but maybe empty.
2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
Good luck and enjoy!
*/

// My Solution
const wave = s => s.split('').map((it, i)=> {
  if (it !== ' ') { return s.substr(0, i) + it.toUpperCase() + s.substr(i+1) }
}).filter(el => el)

// Better Solution
function wave(str){
  let result = [];
  
  str.split("").forEach((char, index) => {
      if (/[a-z]/.test(char)) {
          result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
      }
  });
  
  return result;
}

// Another Solution
var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)

// Another Solution
function wave(str) {
  return str.split('').map((l, i, a) => {
    let c = a.slice();
    c[i] = c[i].toUpperCase();
    return c.join('');
  }).filter((w, i) => w[i] !== ' ');
}
