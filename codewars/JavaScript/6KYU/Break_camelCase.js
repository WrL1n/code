/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution('camelCasing') // => should return 'camel Casing'
*/

// My Solution
const solution = str => {
  let result = []

  result.push(
    str.split('').reduce((acc, rec, i) => {
      if (rec === rec.toUpperCase()) {
        result.push(acc)
        return rec
      } else {
        return acc + rec
      }
    }, '')
  )

  return result.join(' ')
}

// Better Solution
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

// Another Solution
function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

// Another Solution
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

// Another Solution
function solution(string){
  return string.replace(/[A-Z]/g, function(c){return " " + c;});
}

// Another Solution
function solution(string) {
  return string.replace(/(?=[A-Z])/g," ")
}

// Another Solution
const solution = string => {
  return [...string].map((char) => {
    return (char === char.toUpperCase()) ? ` ${char}` : char;
  }).join('');
}
