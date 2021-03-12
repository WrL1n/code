/*

Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.

*/

// My Solution
const spEng = (sentence) => {return sentence.toLowerCase().includes('english')}

// Better Solution
function spEng(s){
  return /english/i.test(s)
}

// Another Solution
function spEng(sentence){
  let sentenceLower = sentence.toLowerCase();
  return sentenceLower.includes('english');
}

// Another Solution
const spEng = sentence => /english/i.test(sentence)

// Another Solution
function spEng(s){
  return s.toLowerCase().indexOf('english')!=-1
}
