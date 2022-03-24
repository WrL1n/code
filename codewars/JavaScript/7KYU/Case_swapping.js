/*

*/

// My Solution
const swap = s => [...s].reduce((acc, rec) => {
  return rec === rec.toLowerCase()
    ? acc.concat(rec.toUpperCase())
    : acc.concat(rec.toLowerCase())
}, '')

// Better Solution
function swapCase(x) { return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase() }

function swap(str) { return str.split("").map(swapCase).join("") }

// Another Solution
function swap(str){
  return str.replace(/[a-zA-Z]/g, function(c) {
    return c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  });
}

// Another Solution
const swap = str => [...str].map( el => el[`to${ el < 'a' ? 'Low' : 'Upp'}erCase`]() ).join('')

// Another Solution
function swap(str) {
  return str.replace(/./g, c => c < "a" ? c.toLowerCase() : c.toUpperCase())
}
