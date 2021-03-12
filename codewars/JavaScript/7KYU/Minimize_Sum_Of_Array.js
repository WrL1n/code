/*
ask
Given an array of intgers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always has even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74
*/

// My Solution
const minSum = arr =>
  [...arr]
    .sort((a, b) => a - b)
    .reduce(
      (total, number, index, array) =>
        total + number * array[array.length - index - 1],
      0
    ) / 2

// Better Solution
function minSum(arr) {
  return arr.sort( (a,b) => a-b )
            .slice(0, arr.length/2)
            .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}

// Another Solution
minSum=a=>(a=a.slice().sort((a,b)=>a-b)).reduce((x,y,i)=>x+(y*a[a.length-1-i]),0)/2

// Another Solution
function minSum(arr) {
  arr.sort((x,y)=>x-y)
  s=0
  while(arr.length)s+=arr.pop()*arr.shift()
  return s
}

// Another Solution
function minSum(a) {
  return a.sort((a,b)=>a-b).reduce((s,x,i,a)=>s+x*a[a.length-i-1],0)/2
}
