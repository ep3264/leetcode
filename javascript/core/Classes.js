import { log } from "./include.js";

function Animal(name, type) {
  this.name = name;
  this.type = type;

  // Private variable
  let energy = 100;

  this.eat = function () {
    energy += 10;
    return `${this.name} is eating. Energy: ${energy}`;
  };

  this.sleep = function () {
    energy += 20;
    return `${this.name} is sleeping. Energy: ${energy}`;
  };
}

Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};

const lion = new Animal('Lion', 'Big Cat');
console.log(lion.speak()); // Output: "Lion makes a noise."
console.log(lion.eat());   // Output: "Lion is eating. Energy: 110"
console.log(lion.sleep()); // Output: "Lion is sleeping. Energy: 130"

log(lion instanceof Animal); // => true 

log(Animal.prototype.isPrototypeOf(lion));
log(Animal.prototype == lion);