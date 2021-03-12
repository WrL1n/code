/*
Write a function that will take an array and a person object as parameters. The function will only push a "person" object onto the end of an array if someone with that phone number doesn't already exist in that array.

-A "person" is a javascript object with a name and a phoneNumber : {name:'SomeName', phoneNumber:1234567890}
-A duplicate person object is an object with the same phoneNumber as someone else

If the person object is unique, push them onto the end of the array, and return true.
If the person object is NOT unique, don't push them to the array and return false;
If the person doesn't have a phoneNumber, don't add them to the array and return false.
*/

// My Solution
const uniquePush = (arr, obj) => {
  if (!obj.phoneNumber) { return false }
  return arr.map( it => it.phoneNumber ).includes(obj.phoneNumber) ? false : arr.push(obj)
}

// Better Solution
function uniquePush(arr, obj) {
  if (obj.phoneNumber && !arr.some(function (entry) { return entry.phoneNumber == obj.phoneNumber })) 
    return arr.push(obj);
}

// Another Solution
function uniquePush(arr, obj) {
  return obj.phoneNumber &&
    arr.every(function(other) { return other.phoneNumber != obj.phoneNumber; }) &&
    arr.push(obj);
}

// Another Solution
function uniquePush(arr, obj) {
  return !obj.phoneNumber || arr.some(function(e) {
    return e.phoneNumber == obj.phoneNumber;
  }) ? false : (arr.push(obj), arr);
}

// Another Solution
function uniquePush(arr, obj) {
  if (!obj.phoneNumber) return false;

  if (!arr.some(function(item) { return item.phoneNumber === obj.phoneNumber; })) {
    arr.push(obj);
    return true;
  }
  return false;
}

// Another Solution
function uniquePush(arr, obj) {
  var count=0;
  for (var i=0; i<arr.length; ++i)
    if (arr[i].name==obj.name||arr[i].phoneNumber==obj.phoneNumber||obj.phoneNumber==undefined)
      count++;
  if (count==0){
    arr.push(obj)
    return true 
  }
  else
  return false;
}
