/*
Write a method that takes an array of hashes with two keys each: country or state, and capital. Keys may be symbols or strings

The method should return an array of sentences declaring the state or country and its capital.

Examples

state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] # returns "The capital of Maine is Augusta"

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
capital(country_capitals)[0] # returns "The capital of Spain is Madrid"

mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
capital(mixed_capitals)[1] # returns "The capital of Spain is Madrid"
*/

// My Solution
const capital = capitals => capitals.map(obj => {
  return typeof obj.state === 'undefined'
  ? `The capital of ${obj.country} is ${obj.capital}`
  : `The capital of ${obj.state} is ${obj.capital}`
})

// Better Solution
function capital(capitals) {
  return capitals.map(function(e) {
    return 'The capital of ' + (e.state || e.country) + ' is ' + e.capital
  })
}

// Another Solution
function capital(capitals) {
  return capitals.map(function(v) {return 'The capital of ' + (v.state || v.country) + ' is ' + v.capital;});
}

// Another Solution
function capital(capitals){
  return capitals.map(function (hash) {
    return Object.keys(hash).reduce(function (a, b) {
      return 'The capital of ' + hash[a] + ' is ' + hash[b] 
    })
  })
}
