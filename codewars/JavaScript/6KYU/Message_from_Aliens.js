/*
Aliens send messages to our planet, but they use a very strange language. Try to decode the messages!
*/

// My Solution
// const tests = [
//   [ ']()]|_]|_]][-]|-|]', 'hello' ],
//   [ '{|^{|{{|_{]3{', 'blip' ],
//   [ '..[-.|_.|^....().[-.|^.__..|)...|.|^.|_|..~|~._\\~.__...[-..|.|)..', 'die stupid people'],
//   ["'''_\\~'|_|'()'|''('|'|_'[-'|)''__'_\\~'/<'()'()'|_'''__'|\\|'|''/\\'/?']3'__''/?'|_|''()'`/''", 'your brain looks delicious'],
//   ['}/\\}~|~}/\\}/<}__}|)}}}[-}~|~}/\\}(}|}|_}|^}|_|}|)}__}|)}}}|\\|}|}/=}__}()}}}~|~}__}`/}/?}}~|~}', 'try to find duplicated kata']
// ]

// var translate = (message, response) => {
//   return message.split(`${message[0]}`)
//           .filter(it => it)
//           .reverse()
//           .reduce((acc, rec, i) => {
//             return {...acc, [`${rec}`]: response[i] }
//           }, {})
// }

// var dictionary = (arr) => {
//   return arr.reduce((acc, rec) => {
//     return {...acc, ...translate(rec[0], rec[1]) }
//   }, {})
// }

const decode = (m) => {
  const d = {
    "__":' ', "/\\":'a', "]3":'b',"(":'c',"|)":'d' ,"[-":'e',"/=":'f',"\(_,":'g' ,"|-|":'h' ,"|":'i',"_T":'j',
    "/<":'k', "|_":'l',"|\\/|":'m' ,"|\\|":'n' ,"()":'o' ,
    "|^":'p' ,"()_":'q' ,
    "/?":'r' ,"_\\~":'s' ,"~|~":'t' ,"|_|":'u',"\\/":'v' ,"\\/\\/":'w',"><":'x' ,"`/":'y',"~/_":'z'}

  return m.split(m[0]).map(v => d[v] ? d[v] : '').reverse().join('')
}

// Better Solution (without dictionary)
  function decode(m) {
    return m
    .split(m.charAt(0))
    .filter(arr => arr !== "")
    .reverse()
    .reduce((finalString, char) => finalString + dictionary[char], '');
  }

// Another Solution (without dictionary)
function decode(m) {
  return m
    .split(new RegExp('[\\' + m[0] + ']+', 'g'))
    .slice(1, -1)
    .map(t => dictionary[t])
    .reverse()
    .join('');
}

// Another Solution
function decode(m) {
  let seperator = [],
    split = seperator.push(m.split('').pop()),
    splitter = m.split(seperator.toString()).reverse().filter(x=> x !== "").map(x=> x.replace("__",' ')),

    obj ='/\\.]3.(.|).[-./=.(_,.|-|.|._T./<.|_.|\\/|.|\\|.().|^.()_./?._\\~.~|~.|_|.\\/.\\/\\/.><.`/.~/_. ',
    objSp = obj.split('.'),
    alpha = "abcdefghijklmnopqrstuvwxyz ".split(''),
    mapper = splitter.map(x=> objSp.indexOf(x));

  return mapper.map(x=> alpha[x]).join('');
}