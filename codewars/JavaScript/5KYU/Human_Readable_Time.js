/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

// My Solution
function humanReadable(seconds) {
  const hours = parseInt( seconds / 3600 )
  const minutes = parseInt( seconds / 60 ) % 60
  const second = seconds % 60
  
  let part = function(value){
    return value < 10 ? "0" + value : value
  }
  
  return part(hours) + ":" + part(minutes) + ":" + part(second)
}

// Better Solution
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

// Another Solution
function humanReadable(seconds) {
  var hours = parseInt( seconds / 3600 ) ;
  var minutes = parseInt( seconds / 60 ) % 60;
  var seconds = seconds % 60;
  
  var pad = function(val){
    return val < 10 ?"0"+val:val;
  }
  
  return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
  }

// Another Solution
function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}
