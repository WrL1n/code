/*
--- Part Two ---
Time to check the rest of the slopes - you need to minimize the probability of a sudden arboreal stop, after all.

Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:

Right 1, down 1.
Right 3, down 1. (This is the slope you already checked.)
Right 5, down 1.
Right 7, down 1.
Right 1, down 2.
In the above example, these slopes would find 2, 7, 3, 4, and 2 tree(s) respectively; multiplied together, these produce the answer 336.

What do you get if you multiply together the number of trees encountered on each of the listed slopes?
*/

// Data transform
map = document.querySelector('pre')
  .outerText
  .split('\n')
  .filter(it => it)

// Code
getTrees = (n,k) => {
  let x = 0
  let y = 0
  let trees = 0

  while(y < map.length){
    const current = map[y][x % map[0].length]
    if(current === "#") trees++
    x += n
    y += k
  }
  return trees
}

multiTrees = () => getTrees(1,1) * getTrees(3,1) * getTrees(5,1) * getTrees(7,1) * getTrees(1,2)

multiTrees()