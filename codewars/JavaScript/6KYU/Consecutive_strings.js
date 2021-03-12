/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption
*/

// My Solution
const longestConsec = (arr, k) => {
  if(!arr.length || k > arr.length || k <= 0) return ''

  let rez = { maxLength: 0, str: '' }
  for(let i = 0; i <= arr.length - k; i++){

    let stepStr = ''
    for(let j = 0; j < k; j++){
      stepStr += arr[i+j]
    }
    if(stepStr.length > rez.maxLength){
      rez.maxLength = stepStr.length
      rez.str = stepStr
    }
  }

  return rez.str
}

// Better Solution
function longestConsec(strarr, k) {
  var longest = "";
  for(var i=0;k>0 && i<=strarr.length-k;i++){
    var tempArray = strarr.slice(i,i+k);
    var tempStr = tempArray.join("");
    if(tempStr.length > longest.length){
      longest = tempStr;
    }
  }
  return longest;
}

// Another Solution
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }
  
  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length)
      ? currString
      : long;
  }, '');
}

// Another Solution
function longestConsec(strarr, k) {
  if( strarr.length==0 || k> strarr.length || k <1 ) return "";
  let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
      i = lens.indexOf( Math.max(...lens) );
  return strarr.slice(i,i+k).join('')
}

// Another Solution
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return "";
  }
  
  return strarr
  .map((value, index) => (
    strarr.slice(index, index+k).join('')
  ))
  .reduce((longest, current) => current.length > longest.length ? current : longest)
  
}
