/*
We need to sum big numbers and we require your help.
Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

// My Solution
const whichLonger = (a, b) => {
  if (a.length > b.length) return a
  if (a.length < b.length) return b
  if (a === b) return a

  let i = 0
  while (Number(a[i]) === Number(b[i])) {
    i++
  }
  return Number(a[i]) > Number(b[i]) ? a : b
}

const add = (a, b) => {
  const longest = whichLonger(a,b)
  const reversedLongest = longest.split('').reverse()
  const shortest = a === longest ? b : a
  const reversedShortest = shortest.split('').reverse()

  let reversedSum = ''
  let transferable = 0
  for (let i = 0; i < longest.length; i++) {
    let sumStepChars = Number(reversedLongest[i]) + (Number(reversedShortest[i]) || 0 ) + transferable
    let firstChar = sumStepChars % 10
    transferable = Math.trunc(sumStepChars / 10)

    reversedSum = firstChar + reversedSum
  }
  return transferable ? transferable + reversedSum : reversedSum
}

// Better Solution
function add (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}

// Another Solution
function add(a, b) {
  var carry = 0, result = [],
      len = Math.max(a.length, b.length), i = len;
  while (i--) {
    var sum = (+a[i - len + a.length]||0) + (+b[i - len + b.length]||0) + carry;
    carry = parseInt(sum / 10);
    result.unshift(sum % 10);
  }
  if (carry) result.unshift(carry);
  return result.join('');
}

// Another Solution
function add(a, b) {
  a = '0' + a //we add a zero upfront to make space for '1' if sum of digits are greater than 10
  b = '0' + b

  if (a.length > b.length) { //Then we add more '0''s to make a,b strings equal length
    var zeroCount = a.length - b.length
    b = (Array(zeroCount + 1).join('0')) + b
  } else if (b.length > a.length) {
    var zeroCount = b.length - a.length
    a = (Array(zeroCount + 1).join('0')) + a
  }

  var result = '';
  var temp = 0;
  for (var i = a.length - 1; i > -1; i--) { //for every digit from the end...
    var res = parseInt(a[i]) + parseInt(b[i]) + temp // we sum them + temp variable.
    temp = 0 //we renew the temp var
    if (res >= 10) { //if our sum if greater than 10 we put '1' to the temp var so that next calculation will include the previous addition
      res = res - 10
      temp = 1
    }
    result = res + result // we add result to the string at front
  }


  if (result[0] == '0') //sometimes resulting string begins with a zero (if those we added in first line are unneded )
    result = result.substr(1) //that unneeded zero has to be removed

  return result
}

// Another Solution
function add(a, b) {
  const sum = +a.slice(-1) + +b.slice(-1) + +(arguments[2] || '').slice(0, 1);
  if (a.length <= 1 && b.length <= 1) return sum + (arguments[2] || '').slice(1);
  let acc = '' + ~~(sum / 10) + sum % 10 + (arguments[2] || '').slice(1);
  return add(a.slice(0, -1), b.slice(0, -1), acc)
}

// Another Solution
function add(a,b) {
  const arrA = a.split(''), arrB = b.split('');
  const arrToNormalize = arrA.length > arrB.length ? arrB : arrA;
  while (arrA.length != arrB.length) {
    arrToNormalize.unshift(0);
  }
  return arrA
    .reduceRight((sumArr, value, index, arr) => {
        let sum = Number(value) + Number(arrB[index]);
        if (sumArr.length == arrB.length - index) {
          sum += sumArr.shift();
        }
        if (sum > 9) {
          sumArr.unshift(sum - 10);
          sumArr.unshift(1);
        } else {
          sumArr.unshift(sum);
        }

        return sumArr;
      }, [])
      .join('');
}

// Another Solution
const add = (a, b) =>
  ((a, b, c) => [...a].reduceRight((pre, val, idx) => (sum => (c = sum / 10 ^ 0, sum % 10 + pre))(+val + +b[idx] + c), ``).replace(/^0+/, ``))
  (a.padStart(Math.max(a.length, b.length) + 1, `0`), b.padStart(Math.max(a.length, b.length) + 1, `0`), 0);

// Another Solution
const add = (a,b) => ((s=((a=a.split("")).length>(b=b.split("")).length?a:b)
.reduceRight(s=>({s:(s.c+=~~a.pop()+~~b.pop())%10+s.s,c:~~(s.c/10)}),{s:"",c:0})).c==0?"":s.c)+s.s;

// Another Solution
const add=(a,b,r=0)=>(res=>a==b && b=="" && r==0 ? "" : add(a.slice(0,-1),b.slice(0,-1),r=~~(res/10))+res%10)(+a.slice(-1)+ +b.slice(-1)+ +r).replace(/^0+/g,"");

// Another Solution
add=(a,b,c=a=>('0'.repeat(150)+a).slice(-150),d=c(a),e=c(b))=>[...e].reduceRight(([a,b],c,e)=>[((f=+c+ +d[e]+b)%10)+a,f/10|0],['',0])[0].replace(/^0+/,'')
