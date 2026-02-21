const str: string = "x";
console.log(str);

const object = [1, 2, 3];
for (const element of object) {
  console.log(element);
}

const n: string = "x";

const s: number = 1;

console.log(n);
console.log(s);

const ff = (x: number) => 15 + x;

console.log(ff(1));
console.log(ff(1));
console.log(ff(3));

const num: number = 1234567;

console.log(num);

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const animal: Animal = { name: "Kat" };

console.log(animal);

interface Animal2 {
  species: string;
}

class Dog implements Animal2 {
  public age: number = null!;
  public age2: number;
  species: string;

  constructor(age: number) {
    this.age2 = age;
    this.species = "dog";
  }
}
const dog: Dog = new Dog(1);
const y = dog.age;
console.log(y);
console.log(dog);
