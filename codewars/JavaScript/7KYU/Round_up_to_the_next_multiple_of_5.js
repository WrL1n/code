/*
Given an integer as input, can you round it to the next (meaning, "higher") 5?

Examples:
input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

// My Solution
const roundToNext5 = n => n % 5 ? n > 0 ? n + (5 - n % 5) : n -(n % 5) : n

// Better Solution
function roundToNext5(n){
  return Math.ceil(n/5)*5;
}

// Another Solution
function roundToNext5(n){
  while(n % 5 !== 0) n++;
  return n;
}

// Another Solution
function roundToNext5(n){
  if(n % 5 == 0) return n
  n++
  return roundToNext5(n)
}
