/*

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

*/

// My Solution(MAXIMUM PEPEGA)
function well(x){
  if (x.filter(idea => idea === 'good').length === 0) {
    return 'Fail!'
  } else if (x.filter(idea => idea === 'good').length <= 2) {
    return 'Publish!'
  } else if (x.filter(idea => idea === 'good').length > 2) {
    return 'I smell a series!'
  }
}

// Better Solution
const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}

// Another Solution
function well(x) {
  const count = x.reduce((s, v) => s + (v == 'good'), 0);
  return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}

// Another Solution
well = x => (x = x.filter(e => e == 'good').length) < 1 ? 'Fail!' : x > 2 ? 'I smell a series!' : 'Publish!';

// Another Solution
const well = x => {
  let ideas = x.filter(y=>y==='good').length
    switch (true) {
      case ideas == 0: return 'Fail!'; break;
      case ideas < 3: return 'Publish!'; break;
      case ideas > 2: return 'I smell a series!'
    }
  
  }
