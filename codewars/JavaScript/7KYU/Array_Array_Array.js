/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

// My Solution
const explode = x => {
  return x.find(it => typeof(it) === 'number')
    ? Array(Math.max(
        x.reduce((acc,rec)=> typeof(rec) === 'number' ? acc + rec : acc, 0)
      )).fill(x)
    : 'Void!'
}

// Better Solution
const explode = x => {
  const n = x.filter(Number).reduce((s, e) => s + e, 0);
  return n ? Array(n).fill(x) : 'Void!';
}

// Another Solution
const explode=([x,y])=>x+0!=x&&y+0!=y?"Void!":Array((+x||0)+(+y||0)).fill([x,y])

// Another Solution
var explode=([a,b], len = (+a|0) + (+b|0)) => len == 0 ? 'Void!' : Array.from({length:len}, _=>[a,b]);

// Another Solution
explode=x=>(s=~~x[0]+~~x[1])?Array(s).fill(x):'Void!'
