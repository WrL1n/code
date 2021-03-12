/*
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

Example:
dbl_linear(10) should return 22

Note:
Focus attention on efficiency
*/

// My Solution
const dblLinear = n => {
  let u = [1], x = 0, y = 0
  for (let i = 0; i < n; i++) {
    let nextX = 2 * u[x] + 1, nextY = 3 * u[y] + 1

    if(nextX < nextY){
      u.push(nextX)
      x++
    }
    if(nextX == nextY){
      u.push(nextX)
      x++
      y++
    }
    if(nextX > nextY){
      u.push(nextY)
      y++
    }
  }
  return u[n]
}

// Better Solution
function dblLinear(n) {
  var ai = 0, bi = 0, eq = 0;
  var sequence = [1];
  while (ai + bi < n + eq) {
    var y = 2 * sequence[ai] + 1;
    var z = 3 * sequence[bi] + 1;
    if (y < z) { sequence.push(y); ai++; }
    else if (y > z) { sequence.push(z); bi++; }
    else { sequence.push(y); ai++; bi++; eq++; }
  }
  return sequence.pop();
}

// Another Solution
function dblLinear(n) {
  var u = [1], pt2 = 0, pt3 = 0; //two pointer

  for(var i = 1;i<=n;i++){
    u[i] = Math.min(2* u[pt2] + 1, 3*u[pt3] + 1);
    if(u[i] == 2 * u[pt2] + 1) pt2++;
    if(u[i] == 3 * u[pt3] + 1) pt3++;
  }

  return u[n];

}

// Another Solution
function dblLinear(n) {
  var myset = new Set();
  var num = 1;
  myset.add(num);
  if (n === 0) {return num}
  while (myset.size <= n) {
    num++;
    if (myset.has((num - 1)/2) || myset.has((num - 1)/3)) {myset.add(num)}
  }
  return num;
}

// Another Solution
function dblLinear(n) {
  var h = [];
  var x2 = 1, x3 = 1;
  var i = 0, j = 0;
  for (var index = 0; index < n+1; index++)
  {
      h[index] = x2 < x3 ? x2 : x3;
      if (h[index] == x2) x2 = 2 * h[i++] + 1;
      if (h[index] == x3) x3 = 3 * h[j++] + 1;
  }
  return h[n];

}

// Another Solution
function dblLinear(n) {
  let x = 1;
  let y = [];
  let z = [];
  for (let i = 0; i < n; i += 1) {
    y.push(x * 2 + 1);
    z.push(x * 3 + 1);

    let min = Math.min(y[0], z[0])
    if (min === y[0]) x = y.shift();
    if (min === z[0]) x = z.shift();
  }
  return x
}

// Another Solution
var cache = [1], [i2,i3] = [0,0];
function dblLinear(n) {
  while (cache.length <= n) {
    while (calc2(i2) <= cache[cache.length - 1]) i2++;
    while (calc3(i3) <= cache[cache.length - 1]) i3++;
    cache.push(Math.min(calc2(i2), calc3(i3)));
  }
  return cache[n];
}
function calc2(n) { return 2 * cache[n] + 1; }
function calc3(n) { return 3 * cache[n] + 1; }
