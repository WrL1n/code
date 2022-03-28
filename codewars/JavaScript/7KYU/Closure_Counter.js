/*
Define the function counter that returns a function that returns an increasing value.
The first value should be 1.
You're going to have to use closures.
Example:
const newCounter = counter();
newCounter() // 1
newCounter() // 2
*/

// My Solution
const counter = () => {
  let c = 0
  return () => ++c
}

// Another Solution
const counter = (arg = 0) => () => ++arg;

// Another Solution
counter=(_=0)=>$=>++_

// Another Solution
const L=[]
function counter(){
  const L=[]
  return function(){
    L.push(null)
    return L.length
  }
}
