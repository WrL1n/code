/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

// My Solution
const multiplicationTable = size => {
  const row = new Array(size).fill(null).map((_, i) => i + 1)
  let result = [row] 
  for (let i = 2; i <= row.length; i++){
    result = result.concat([ row.map(it => it * i) ])
  }
  return result
}

// Better Solution
multiplicationTable = function(size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for(var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }

  return result
}

// Another Solution
multiplicationTable = function(size) {

  return Array.apply(null, new Array(size)).map(function(val, i) {
    return Array.apply(null, new Array(size)).map(function(val, j) {
      return (i+1) * (j+1);
    });
  });
}


// Another Solution
multiplicationTable = function(size) {
  // insert code here
  var arr = [];
  for (var i=1; i<=size; i++) {
    arr[i-1] = [];
    for (var j=1; j<=size; j++) {
      arr[i-1][j-1] = i*j;
    }
  }
  return arr;
}

// Another Solution
multiplicationTable = function(n) {
  return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>(i+1)*(j+1)))
}

// Another Solution
multiplicationTable = function(size) {
  return Array.apply(null, Array(size)).map(function(item, indx) {
      return Array.apply(null, Array(size)).map(function(innerItem, innerIndx) {
          return (indx+1)*(innerIndx+1);
        });
    });
}
