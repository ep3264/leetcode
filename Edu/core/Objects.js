import { log } from '../include.js'

let a = new Array();
a.push(1, 3, 5, 7, 9);
let empty = {};                          // An object with no  properties 
let point = { x: 0, y: 0 };              // Two numeric
log(a);
let src = { z: 5, zz: 55 };

Object.assign(point, src, { a: 15 });

log(point);

log({ ...point, ...{ z: 15 } });

const original = {
  name: 'Dave',
  age: 40,
  skills: ['JavaScript', 'Python']
};

// Clone the object
const cloned = JSON.parse(JSON.stringify(original));

console.log(cloned);

const sym1 = Symbol('property1');
const sym2 = Symbol('property2');
const obj = {
  prop1: 'value1',
  [sym1]: 'symbolValue1',
  [sym2]: 'symbolValue2'
};

// Retrieve symbol properties
const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols);  // Output: [ Symbol(sym1), Symbol(sym2) ]

// Access symbol properties
symbols.forEach(sym => {
  console.log(`${sym.toString()}: ${obj[sym]}`);
});


const methodName = 'sayHello';
const person = {
  name: 'Alice',
  greet() { // Shorthand method
    console.log(`Hello, my name is ${this.name}.`);
  },
  [methodName]() {
    console.log(`Hello, ${this.name}!`);
  }

};

person.greet(); // Output: "Hello, my name is Alice."
person.sayHello();

let rectangle = {
  _width: 10,
  _height: 5,

  // Getter for the area (calculated property)
  get area() {
    return this._width * this._height;
  },

  // Getter for the perimeter (calculated property)
  get perimeter() {
    return 2 * (this._width + this._height);
  },

  // Setter for width
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error('Invalid width');
    }
  },

  // Setter for height
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error('Invalid height');
    }
  }
};

// Access calculated properties
console.log(rectangle.area);      // Outputs: 50
console.log(rectangle.perimeter); // Outputs: 30

// Modify properties using setters
rectangle.width = 20;

console.log(rectangle.area);      // Outputs: 100
console.log(rectangle.perimeter); // Outputs: 50

