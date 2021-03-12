/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

// My Solution
String.prototype.camelCase=function(){
  return this.split(' ').map(word => {
    if (!word) return ''
    return word[0].toUpperCase() + word.slice(1)
  }).join('')
}

// Better Solution
String.prototype.camelCase=function(){
  return this.split(' ').map(function(word){
   return word.charAt(0).toUpperCase() + word.slice(1);
 }).join('');
}

// Another Solution
String.prototype.camelCase = function () {
  return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
}

// Another Solution
String.prototype.camelCase=function(){
  return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
}

// Another Solution
String.prototype.camelCase=function(){
  const capitalize = (word) => {
    return word.slice(0,1).toUpperCase() + word.slice(1)
  }
  
  return this
    .split(' ')
    .map(capitalize)
    .join('')
}
