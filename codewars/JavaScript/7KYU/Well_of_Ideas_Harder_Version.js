/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
*/

// My Solution
const well = x => {
  const good_count = (x.join('').match(/good/gi) || []).length
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}

// Better Solution
function well(x) {
  let match = (''+x).match(/good/gi) || []
  if (match.length == 0) return 'Fail!'
  if (match.length <= 2) return 'Publish!'
  return 'I smell a series!'
}

// Another Solution
function well(x){
  x = x.reduce((p, c) => p + c.filter(f => /^good$/i.test(f)).length, 0);
  return x === 0 ? 'Fail!' : x <= 2 ? 'Publish!' : 'I smell a series!';
}

// Another Solution
const well = a => {
  let goodCounts = a.map(e => e.filter(e => (''+e).toLowerCase() == 'good').length)
  let goodCount = goodCounts.reduce((p,c) => p + c)
  return goodCount == 0 ? 'Fail!' : goodCount > 2 ? 'I smell a series!' : 'Publish!'
}
