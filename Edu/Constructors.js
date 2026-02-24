function Person(name) {
    this.name = name;
}
Person.prototype.sayHi = function () {
    console.log("Hi, I'm " + this.name);
};

const p1 = new Person("Alice");
p1.sayHi();

const log = console.log;
log(p1.__proto__ === Person.prototype); // true
log(Object.getPrototypeOf(p1) === Person.prototype); // true;