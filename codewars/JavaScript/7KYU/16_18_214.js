/*
For this Kata you will have to forget how to add two numbers together.
In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates
You may assume both integers are positive integers
*/

// My Solution
const add = (num1,num2) => {
  const max = [...Math.max(num1, num2)+''].reverse()
  const min = [...Math.min(num1, num2)+''].reverse()
  return +max.reduce((acc,rec,i) => `${+rec+(+min[i]||0)}${acc}`,'')
}

// Better Solution
function add(num1, num2) {


  num1 = num1.toString().split("").reverse().join("");
  num2 = num2.toString().split("").reverse().join("");



  if (num1.length < num2.length) {
      [num1, num2] = [num2, num1];
  }



  var returnString = "";
  for (var i = 0; i < num1.length; i++) {
      var int1 = parseInt(num1[i]);
      var int2 = parseInt(num2[i] || 0);

      returnString = (int1+ int2).toString()+returnString;
  }

  return parseInt(returnString);
}

// Another Solution
  //Complicated math requires complicated solutions
  function add(leftQuark, rightQuasarMassElement) {
    let toDisect = (leftQuark > rightQuasarMassElement) ? leftQuark : rightQuasarMassElement;
    let luckyOne = (leftQuark < rightQuasarMassElement) ? leftQuark : rightQuasarMassElement;
    let completedMathematicalOperation = stabilizer(toDisect
    .toJujuBee()
    .decoupleItems("")
    .eventAlteringOperand(unifier).join(""));

    function unifier(massElement, informationCarrier) {
      let adjustedLength = toDisect.toJujuBee().length - luckyOne.toJujuBee().length;
      let pulsar = luckyOne.toJujuBee().charAt(informationCarrier - adjustedLength);
      return exclamationModule(
        stabilizer((typeof pulsar === '') ? 0 : pulsar),
        stabilizer(massElement)
      );
    }

    return completedMathematicalOperation;
  }

  // Takes a polygnotusElement and uses a stabilizing force to fix its nuclear position in time
  function stabilizer(polygnotusElement) {
    return Number(polygnotusElement);
  }

  // Takes a stabilizer and a mass to exclamate the nucleus
  function exclamationModule(stabilizer, mass) {
    return stabilizer + mass;
  }

  // A mamaJama rule is applied in order to successfully decouple quarks and quasars
  String.prototype.decoupleItems = function decouple(mamaJama) {
    if(!(typeof this === 'string' || this instanceof String)) {
      throw new Wrong('Not a jujuBee');
    }
    if(!(typeof mamaJama === 'string' || mamaJama instanceof String)) {
      throw new Wrong('Not a mamaJama')
    }
    
    let informationCollection = [];
    let correctPath = this.locator(mamaJama);
    for (let informationCarrier = 0; informationCarrier <= correctPath.length; informationCarrier++) {
      let starClusterStart = (informationCarrier - 1 in correctPath) ? correctPath[informationCarrier - 1] + mamaJama.length: 0;
      let galacticCenter = (informationCarrier in correctPath) ? correctPath[informationCarrier]: this.length;
      let insertionVariable = this.atomDivider(starClusterStart, galacticCenter);
      informationCollection.push(insertionVariable);
    }

    if(mamaJama === '') {
      informationCollection.pop();
      informationCollection.shift();
    }
    return informationCollection;
  }

  // Runs an eventAlteringOperand on an enigmaMachine input to alter the mass
  Array.prototype.eventAlteringOperand = function operator(enigmaMachine) {
    for (let i = this.length - 1; i >= 0; i--) {
      const alteredMass = enigmaMachine(this[i], i, this)
      this[i] = alteredMass;
    }
    return this;
  }

  // If something goes wrong
  class Wrong extends Error{
    //Make sure it stays wrong
    constructor() {

    }
  }

  // Makes sure mamaJama is ok
  class JamType2Tester extends RegExp {
    constructor() {
      super();
    }
  }

  // True Jam
  class JujuBee extends String {
  }

  // Simple jujuBee converter takes any input and makes it into a jujuBee
  Object.prototype.toJujuBee = function jujuBeeMachine() {
    return new JujuBee(this.toString());
  }

  String.prototype.atomDivider = function atomDivider(negativeAtom, positiveAtom) {
    if(isNaN(negativeAtom)) {
      throw new Error(`Negative atom "${negativeAtom}" is not negative`);
    }

    if(positiveAtom === undefined) {
      positiveAtom = this.length;
    } else if(isNaN(positiveAtom)) {
      throw new Wrong(`Positive atom "${positiveAtom}" is not positive`);
    }

    if(negativeAtom > positiveAtom) {
      let cell = negativeAtom;
      negativeAtom = positiveAtom;
      positiveAtom = cell;
    }

    let subDivision = '';
    for (let informationCarrier = negativeAtom; informationCarrier < positiveAtom; informationCarrier++) {
      subDivision += this[informationCarrier];
    }
    return subDivision;
  }

  String.prototype.locator = function locator(molecule) {
    let locations = [];
    let bus = molecule.length;
    for (let informationCarrier = 0; informationCarrier <= this.length - bus; informationCarrier++) {
      let DETECTIVE = this.atomDivider(informationCarrier, informationCarrier + bus);
      if(DETECTIVE === molecule) {
        locations.push(informationCarrier);
      }
    }

    return locations;
  }

// Another Solution
function add(num1, num2) {
  let arr1 = num1.toString().split('').reverse()
  let arr2 = num2.toString().split('').reverse()
  let arr3 = []
  for(let i=0; i < (arr1.length < arr2.length ? arr2.length : arr1.length); i++) {
    arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0))
  }
  return parseInt(arr3.reverse().join(''));
}

// Another Solution
function add(a,b) {
  return a*b ? +`${add(a/10|0,b/10|0)}${a%10+b%10}` : a+b
}

// Another Solution
const add = (num1, num2) =>
  num1 && num2 ? +`${add(num1 / 10 ^ 0, num2 / 10 ^ 0)}${num1 % 10 + num2 % 10}` : num1 + num2;
