/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// My Solution
const duplicateCount = text => {
  const obj = [...new Set(text.toLowerCase())].reduce((acc, rec) => {
    return Object.assign(acc, { [rec]: text.toLowerCase().split('').filter(it => it === rec).length })
  }, {})
  return Object.values(obj).filter(it => it > 1).length
}

// Better Solution
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

// Another Solution
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

// Another Solution
function duplicateCount(text){
  return text
      .toLowerCase()
      .split('')
      .reduce(function(a, l) {
        a[l] = a[l] ? a[l]+1 : 1;
        if(a[l] === 2) a.count++;
        return a;
      }, {count:0}).count;
}

// Another Solution
function duplicateCount(text) {
  var dup = [];
  text.toLowerCase().split('').forEach(function(v, i, arr) {if(i != arr.lastIndexOf(v) && dup.indexOf(v) == -1) dup.push(v);});
  return dup.length;
}

// Another Solution
function duplicateCount(text){
  return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size
}

// Another Solution
const duplicateCount = (text) => (text.match(/(\w)(?=(?!.*\1.*\1).*\1)/gi) || []).length;

// Another Solution
function duplicateCount(text){
  return [...new Set([...text.toLowerCase()].sort().filter((c,p,a)=>c===a[p-1]))].length
}
