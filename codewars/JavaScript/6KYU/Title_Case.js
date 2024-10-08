/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

// My Solution
const titleCase = (title, minorWords) => {
  if (!title) {return ''}
  const arrMinorWords = ( minorWords || '').split(' ').map(it => it.toLowerCase())

  return title.split(' ').map((it, i) => {
    const loweredIt = it.toLowerCase()

    if (!i) { return it[0].toUpperCase() + loweredIt.substr(1) }

    return arrMinorWords.includes(loweredIt)
      ? loweredIt
      : it[0].toUpperCase() + loweredIt.substr(1)
  }).join(' ')
}

// Better Solution
function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}

// Another Solution
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function titleCase(title, minorWords) {
var titleAr = title.toLowerCase().split(' '),
    minorWordsAr = minorWords ? minorWords.toLowerCase().split(' ') : [];

return titleAr.map(function(e, i){return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e })
              .join(' ');
}

// Another Solution
function titleCase(title, minorWords) {
  minorWords = (minorWords || "").toLowerCase().split(' ');
  title = title.toLowerCase();
  return title.replace(/(\w)\w*/g, (word, firstChar, index) => {
    if (index === 0 || minorWords.indexOf(word) === -1)
      word = word.replace(firstChar, firstChar.toUpperCase());
    return word;
  });
}

// Another Solution
const titleCase = (title, minorWords) => {

  if (!title) 
    return title;

  let cap = word => 
    word[0].toUpperCase() + word.slice(1);

  let minors = (minorWords || '')
    .toLowerCase()
    .split(' ');

  let result = title
    .toLowerCase()
    .replace(/\S+/g, w => minors.indexOf(w) === -1 ? cap(w) : w);

  return cap(result);

}

// Another Solution
function titleCase(title, minorWords) {
  const minorArr = minorWords ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase()
    .split(' ')
    .map((word, i) => {
      if (!word) return word;
      if (minorArr.indexOf(word) !== -1 && i !== 0) return word;
      
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
}
