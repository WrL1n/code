/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

// My Solution
const formatDuration = seconds => {
  if (!seconds) {
    return 'now'
  }

  const units = [
    {
      unit: 'year',
      seconds: 365 * 24 * 60 * 60,
    },
    {
      unit: 'day',
      seconds: 24 * 60 * 60,
    },
    {
      unit: 'hour',
      seconds: 60 * 60,
    },
    {
      unit: 'minute',
      seconds: 60,
    },
    {
      unit: 'second',
      seconds: 1,
    },
  ]

  let remain = seconds

  return units.reduce((components, unit) => {
    const count = Math.floor(remain / unit.seconds);
    if (count) {
      const plural = count > 1 ? 's' : '';
      remain -= count * unit.seconds;
      return components.concat(`${count} ${unit.unit}${plural}`);
    }
    return components
  }, [])
    .reduce((result, component, i, arr) => {
      if (!i) {
        return component
      }
      return (i < arr.length - 1)
        ? `${result}, ${component}`
        : `${result} and ${component}`;
    }, '')
}

// Better Solution
function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';

  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }

  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}

// Another Solution
function formatDuration (seconds) {
  if(!seconds)return "now";
  var strout = "";
  var s = seconds%60;
  seconds = (seconds-s)/60;
  var m = seconds%60;
  seconds = (seconds-m)/60;
  var h = seconds%24;
  seconds = (seconds-h)/24;
  var d = seconds%365;
  seconds = (seconds-d)/365;
  var y = seconds;

  var english=[];
  if(y)english.push(y+" year"+(y>1?'s':''));
  if(d)english.push(d+" day"+(d>1?'s':''));
  if(h)english.push(h+" hour"+(h>1?'s':''));
  if(m)english.push(m+" minute"+(m>1?'s':''));
  if(s)english.push(s+" second"+(s>1?'s':''));

  return english.join(", ").replace(/,([^,]*)$/," and$1");

}

// Another Solution
var formatDuration = (function () {

  return function formatDuration (seconds) {
    return [{name: 'year',   size: 365 * 24 * 60 * 60 * 1},
            {name: 'day',    size:       24 * 60 * 60 * 1},
            {name: 'hour',   size:            60 * 60 * 1},
            {name: 'minute', size:                 60 * 1},
            {name: 'second', size:                      1}].
            reduce(parse, { parts: [], seconds: seconds }).
            parts.
            reduce(join, 'now');
  };
  
  function parse (result, part) {
    var quantity = Math.floor(result.seconds / part.size);
    if (quantity > 0) {
      result.seconds -= quantity * part.size;
      result.parts.push(quantity + ' ' + part.name + (quantity == 1 ? '' : 's'));
    }
    return result;
  }
  
  function join (result, part, index, arr) {
    switch (index) {
      case 0: return part;
      case arr.length - 1: return result + ' and ' + part;
      default: return result + ', ' + part;
    }
  }
  
}());

// Another Solution
function formatDuration (seconds){
  if(seconds == 0) return "now";
  var s = {
    "year" : (60 * 60 * 24 * 365),
    "day" : (60 * 60 * 24),
    "hour" : (60 * 60),
    "minute" : 60
  }
  var output = new Array();
  var years = Math.floor(seconds / s.year);
  if(years > 0){
    output.push(years + " year" + (years == 1 ? "" : "s"));
    seconds = seconds % s.year;
  }
  var days = Math.floor(seconds / s.day);
  if(days > 0){
    output.push(days + " day" + (days == 1 ? "" : "s"));
    seconds = seconds % s.day;
  }
  var hours = Math.floor(seconds / s.hour);
  if(hours > 0){
    output.push(hours + " hour" + (hours == 1 ? "" : "s"));
    seconds = seconds % s.hour;
  }
  var minutes = Math.floor(seconds / s.minute);
  if(minutes > 0){
    output.push(minutes + " minute" + (minutes == 1 ? "" : "s"));
    seconds = seconds % s.minute;
  }
  if(seconds > 0){
    output.push(seconds + " second" + (seconds == 1 ? "" : "s"));
  }
  if(output.length > 1){
    var last = output.pop();
    return output.join(", ") + " and " + last;
  } else {
    return output[0];
  }
}

// Another Solution
const delegates = [
  { s: 'year', v: 60 * 60 * 24 * 365 },
  { s: 'day', v: 60 * 60 * 24 },
  { s: 'hour', v: 60 * 60 },
  { s: 'minute', v: 60 },
  { s: 'second', v: 1 }
];

function formatDuration (seconds) {
  if (!seconds) return 'now';
  
  return delegates.reduce((ret, dg, idx) => {
    const val = Math.floor(seconds / dg.v);
    if (!val) return ret;
    seconds -= dg.v * val;
    const str = val > 1 ? dg.s + 's' : dg.s;
    const add = !ret ? '' : (seconds > 0 ? ', ' : ' and ');
    return ret + add + `${val} ${str}`;
  }, '');
}

// Another Solution
const formatDuration = s => s == 0 ? 'now' :
     [Math.floor(s/60/60/24/365),
      Math.floor(s/60/60/24)%365,
      Math.floor(s/60/60)%24,  
      Math.floor(s/60)%60 ,
      s%60]
     .map((e,i)=> e + ' ' + ['year', 'day', 'hour', 'minute', 'second'][i] + (+e>1?'s': ''))
     .filter(e=> !/^0/.test(e))
     .join(', ')
     .replace(/,\s(?=[\d\s\w]*$)/, ' and ');

// Another Solution
function formatDuration(seconds) {
  var units = ['year', 'day', 'hour', 'minute', 'second'];
  var years = seconds / 60 / 60 / 24 / 365 < 1 ? 0 : seconds / 60 / 60 / 24 / 365;
  var days = seconds / 60 / 60 / 24 % 365;
  var hrs = seconds / 60 / 60 % 24;
  var mins = seconds / 60 % 60;
  return seconds ? [years, days, hrs, mins, seconds % 60].map(function(num, i) {
      num = parseInt(num, 10);
      return num && num + ' ' + units[i] + (num > 1 ? 's' : '');
  }).filter(Boolean).join(', ').replace(/,\s(?=[\d\s\w]+$)/, ' and ') : 'now';
}
