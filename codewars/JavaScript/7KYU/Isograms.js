/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

// My Solution
const isIsogram = str => str.toLowerCase().split('').every((it,i,arr) =>{
  return i === arr.lastIndexOf(it)
})

// Better Solution
function isIsogram(str){
  return !/(\w).*\1/i.test(str)
}

// Another Solution
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}
