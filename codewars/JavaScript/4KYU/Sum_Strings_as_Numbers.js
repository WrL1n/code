/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

// Solution(e1r0nd)
const sumStrings = (a,b) => {
  let sum = (Number(a) + Number(b)).toString()  // +a + +b + ''
  if (!sum.includes`e+`) {
    return sum
  }

  sum = '';
  let $ = 0;
  [a, b] = [a.split``, b.split``];
  while (a.length || b.length || $) {
    $ += ~~a.pop() + ~~b.pop();
    sum = ($ % 10) + sum;
    $ = $ > 9;
  }
  return sum.replace(/^0+/, '');
}

// Better Solution
String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}

// Another Solution
function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}

// Another Solution
function sumStrings(a, b)
{
    var A = a.split(""), B = b.split(""), C = 0, R = "";

    while (A.length || B.length || C)
    {
        C = C + (~~A.pop() + ~~B.pop());
        R = (C % 10) + R;
        C = C > 9;
    }

    return R.replace(/^0+/, "");
}

// Another Solution
function sumStrings(a, b) {
  a = "0" + a.replace(/\D/g,"");
  b = "0" + b.replace(/\D/g,"");
  var c = 0;
  var result = "";

  for(var i=b.length-a.length; i>0; --i) a = "0" + a;
  for(var i=a.length-b.length; i>0; --i) b = "0" + b;

  for(var i=a.length-1; i>-1; --i) {
    c = +a[i] + +b[i] + c;
    result = (c%10) + result;
    c = Math.floor(c/10);
  }

  return result.replace(/^0+/,"");
}

// Another Solution
function sumStrings(a,b) {
  a = a.replace(/^0+/, '').split('').reverse()
  b = b.replace(/^0+/, '').split('').reverse()

  let result = []
  let carry = 0
  let idx = 0
  while (idx < a.length || idx < b.length || carry !== 0) {
    let aVal = idx < a.length ? parseInt(a[idx]) : 0
    let bVal = idx < b.length ? parseInt(b[idx]) : 0
    let sum = aVal + bVal + carry
    result.push(sum % 10)
    carry = Math.floor(sum / 10)
    idx++
  }
  return result.reverse().join('')
}
