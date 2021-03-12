/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

// My Solution
const encode = str => str.replace(/[aeiou]/g, (x) => '_aeiou'.indexOf(x))
const decode = str => str.replace(/[1-5]/g, (x) => '_aeiou'.charAt(x))

// Better Solution
// turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}

// Another Solution
function encode(string){
  var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  return codeStringGivenMapping(string, vowelMapping);
}

function decode(string){
  var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
  return codeStringGivenMapping(string, vowelMapping); 
}

function codeStringGivenMapping(string, mapping){
  return string.split('').map(function(char){
    return mapping[char] || char;
  }).join(''); 
}

// Another Solution
var encode = curry.bind(/[aeiou]/g, function(f){ return 'aeiou'.search(f) + 1 });
var decode = curry.bind(/[1-5]/g, function(f){ return 'aeiou'[--f] });
function curry(f, s){ return s.replace(this, f) }

// Another Solution
const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')

// Another Solution
var encode = coder.bind(/[aeiou]/g, 'search');
var decode = coder.bind(/[1-5]/g, 'charAt');

function coder(func, string) {
  return string.replace(this, func[func].bind(' aeiou'));
}

// Another Solution
const encode = s => s.replace(/[aeiou]/g, v => ' aeiou'.indexOf(v));
const decode = s => s.replace(/\d/g, v => ' aeiou'[v]);

// Another Solution
function encode(s){
  return s.replace(/[aeiou]/g,g=>'aeiou'.indexOf(g)+1) 
}

function decode(s){
  return s.replace(/[1-5]/g,g=>'aeiou'['12345'.indexOf(g)])
}