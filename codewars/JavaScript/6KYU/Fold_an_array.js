/*
#Fold an array

In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!
*/

// My Solution
const fold = arr => {
  let newArr = []
  let length = arr.length % 2 ? Math.floor(arr.length / 2) : arr.length / 2
  for (let i = 0; i < length; i++){
    newArr.push(arr[i] + arr[arr.length - 1 - i])
  }
  return arr.length % 2 ? newArr.concat(arr[arr.length - 1 - Math.floor(arr.length / 2)]) : newArr
}

const foldArray = (arr, runs) => {
  let resultArr = arr
  for (let i = 0; i < runs; i++){
    resultArr = fold(resultArr)
  }
  return resultArr
}

// Better Solution
function foldArray(a, n) {
  const r = [], c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
}

// Another Solution
function foldArray(array, runs) {
  if (!runs) return array;

  var result = [];
  // new Array
  for (var i = 0; i < Math.ceil(array.length / 2); i++) {
    result[i] = array.length -i - 1 === i ? array[i] : array[i] + array[array.length - i - 1];
  }
  
  return foldArray(result, runs - 1);
}

// Another Solution
foldArray = (a, runs) => runs == 0 ? a : 
                foldArray(Array( Math.floor(a.length/2))
                       .fill(0)
                       .map((_,i)=> a[i] + a[a.length-i-1])
                       .concat(a.length %2 == 1 ? [a[(a.length-1)/2]]: [])
                      , runs-1);

// Another Solution
function foldArray (array, runs) {
  let arrayToFold = Array.from(array);
  while (runs > 0) {
      let resultArray = [];
      while (arrayToFold.length > 1) {
          let firstElement = arrayToFold.shift();
          let lastElement = arrayToFold.pop();
          resultArray.push(firstElement + lastElement);
      }
      arrayToFold = [...resultArray, ...arrayToFold];
      runs--;
  }
  return arrayToFold;
};
