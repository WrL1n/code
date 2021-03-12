/*
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

// My Solution
const solution = pairs => Object.keys(pairs).map(key => `${key} = ${pairs[key]}`).join(',');

// Better Solution
function solution(pairs){
  return Object.keys(pairs)
    .map(function(k) { return k + ' = ' + pairs[k] })
    .join(',');
}

// Another Solution
function solution(pairs){
  var array = [];
  for (var pair in pairs){
    array.push((pair+' = '+pairs[pair]));
  }
  return array.join(',');
}

// Another Solution
function solution(pairs){
  var response = '';
  
  for (p in pairs) {
    if (!pairs.hasOwnProperty(p)) continue;
    response += p + " = " + pairs[p] + ",";
  }
  
  return response.slice(0, -1);
}

// Another Solution
function solution(pairs){
  if( Object.keys(pairs).length ){
    var pairs_str = [];
    for( key in pairs ){
      if( pairs.hasOwnProperty(key) ){
         pairs_str.push([key,pairs[key]].join(' = '));
      }
    }
    return pairs_str.join(',');
  }
  return '';
}
