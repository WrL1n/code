/*
No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse. You have 30 bytes to spare.
Example: [1, 2, 3] → [3, 2, 1]
*/

// My Solution
reverse=x=>x.map(x.pop,[...x])

// Better Solution
reverse=a=>a.map(a.pop,[...a])

// Another Solution
reverse=_=>_.map(_.pop,[..._])

// Another Solution
reverse=a=>[...a].map(a.pop,a)

// Another Solution
reverse=_=>[..._].map(_.pop,_)
