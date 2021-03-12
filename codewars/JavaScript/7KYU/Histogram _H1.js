/*
Background
A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.

Example:

6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7
Task
You will be passed the dice value frequencies, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

Notes
There are no trailing spaces on the lines
All lines (including the last) end with a newline \n
A count is displayed beside each bar except where the count is 0
The number of rolls may vary but there are never more than 100
*/

// My Solution
const histogram = results => results.reduce((acc, rec, i) => {
  return `${i + 1}|${'#'.repeat(rec)}${rec ? ' ' + rec : ''}\n` + acc
}, ``)

// Better Solution
const histogram = r => r.reduce((r, x, i) => (i+1)+'|'+(x ? '#'.repeat(x)+' '+x : '')+'\n'+r, '');

// Another Solution
function histogram(results) {
  var histogram = '';
  
  for (var i=5; i>=0; --i)
    histogram += (i+1) + '|' + '#'.repeat(results[i]) + (results[i] > 0 ? ' ' + results[i] : '') + "\n";
  
  return histogram;
}

// Another Solution
function histogram(results) {
  return results.map((j,i)=>`${i+1}|${j==0 ? "" : "#".repeat(j)+" "+j}`+"\n").reverse().join("");
}
