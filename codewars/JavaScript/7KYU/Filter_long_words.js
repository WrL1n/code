/*
Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:

* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']
*/

// My Solution
const filterLongWords = (sentence, n) => sentence.split(' ').filter( word => word.length > n)

// Better Solution
function(){}

// Another Solution
with (require('ramda')){
  const isLongWord = pipe(flip(gt), converge(pipe, [always(length), identity]))
  var filterLongWords = pipe(
    Array,
    adjust(0, split` `),
    adjust(1, isLongWord),
    apply(flip(filter))
  )
}

// Another Solution
function filterLongWords(sentence, n) {
  var longer = [];
  var sent  = sentence.split(' ');
  console.log(sent)
  for(var i=0; i< sent.length; i++) {
    if( sent[i].length > n) {
      longer.push(sent[i])
    }
  }
  return longer
}
