/*
Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

In Racket, the function is called palindrome?

(palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t
*/

// My Solution
const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('')

// Better Solution
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

// Another Solution
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();
