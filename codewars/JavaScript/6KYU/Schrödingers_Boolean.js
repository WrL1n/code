/*
Can a value be both true and false?

Define omniBool so that it returns true for the following:

omnibool == True and omnibool == False
*/

// My Solution
const omnibool = {n:1,valueOf:()=>this.n=!this.n}

// Better Solution
let i=0;
const omnibool = {toString:_=>!(i++)};

// Another Solution
class OmniBool{
  constructor(){
    this.n = false;
  }
}
OmniBool.prototype[Symbol.toPrimitive] = function() { 
  this.n = !this.n;
  return this.n;
};
const omnibool = new OmniBool();

// Another Solution
const omnibool = {
  val: false,
  [Symbol.toPrimitive]() {
    this.val = !this.val;
    return this.val;
  }
};

// Another Solution
const omnibool = {
  i: 1,
  toString: function() {
    return this.i--;
  }
};

// Another Solution
var omnibool = {}
omnibool.valueOf = () => Math.random() > 0.5

// Another Solution
( i => Object.defineProperty( this, "omnibool", { get() { return ! i++; } } ) ) ( 0 ) ;

// Another Solution
const omnibool = { bool: false, toString: _ => this.bool = !this.bool }
