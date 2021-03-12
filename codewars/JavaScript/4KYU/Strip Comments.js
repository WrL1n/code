/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

// My Solution
const solution = (input, markers) =>{
  let arrStr = input.split('\n')

  return markers.reduce((acc,marker) =>{

    arrStr = arrStr.map(it =>{
      return it.includes(marker[0])
        ? it.slice(0, it.indexOf(marker[0])).trim()
        : it.trim()
    })

  return arrStr
  },[]).join('\n')
}

// Better Solution
function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}

// Another Solution
function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}

// Another Solution
RegExp.escape = function (s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function solution (input, markers){
  markers_regexp = markers.map(function(marker) {
    return RegExp.escape(marker);
  }).join("|");
  pattern = new RegExp("\\s*(" + markers_regexp + ").*?\$", "gm");
  return input.replace(pattern, "");
}

// Another Solution
function solution(input, markers){
  return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`,'g'),'');
}

// Another Solution
function solution(input, markers){
  return input.split('\n').map(function(line) {      // each line
    return line.replace(new RegExp('\\s*[' + markers.join('|') + '].*$'), '');
  }).join('\n');
}

// Another Solution
const solution = (input, markers) => input.replace(new RegExp(`(.*)(\\s+[${markers.join('|')}].*)`,'gi'), '$1');
