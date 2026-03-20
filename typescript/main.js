"use strict";
const str = "x";
console.log(str);
const object = [1, 2, 3];
for (const element of object) {
  console.log(element);
}
const n = "x";
const s = 1;
console.log(n);
console.log(s);
const ff = (x) => 15 + x;
console.log(ff(1));
console.log(ff(1));
console.log(ff(3));
const num = 1234567;
console.log(num);
class Animal {
  constructor(name) {
    this.name = name;
  }
}
const animal = { name: "Kat" };
console.log(animal);
class Dog {
  constructor(age) {
    this.age = age;
    this.species = "dog";
  }
}
const dog = new Dog(10);
console.log(dog);
