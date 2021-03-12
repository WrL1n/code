/*
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text

#Hint: See Fibonacci sequence

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.
perimeter(5)  should return 80
perimeter(7)  should return 216
*/

// My Solution
const perimeter = n => {
  //   function fib(x) {
  //     return x <= 1 ? x : fib(x - 1) + fib(x - 2);
  //   }

    function fib(n) {
      let a = 1;
      let b = 1;
      for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
      }
      return b;
    }

    return Array(n + 1).fill(null).map((_, i)=> i + 1).reduce((acc, rec) => acc + fib(rec), 0) * 4
  }

// Better Solution
function perimeter(n) {
  let arr = [1, 1];
  for(let i = 0; i < n - 1; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return 4 * arr.reduce((sum, num) => sum + num, 0);
}

// Another Solution
function fib(n) {
  var a = 1, b = 1, tmp;
  while (n-- > 0) {
    tmp = a;
    a = b;
    b += tmp;
  }
  return a;
}

function perimeter(n) {
    return 4 * (fib(n + 2) -1)
}

// Another Solution
function perimeter(n) {
  var fib = [0,1];
  for(var i = 0; i < n; i++){
    fib.push(fib[fib.length-1]+fib[fib.length-2]);
  }
  return fib.reduce((a,b)=>a+b)*4;
}

// Another Solution
const fib = (_ => {
  let r = Math.sqrt(5), h = 0.5, s = r / 2;
  return n => Math.round((h + s) ** ++n / r - (h - s) ** n / r);
})();

const perimeter = n => 4 * (fib(n + 2) - 1);
