
function printPrototypeChain(obj) {
    let current = obj;

    while (current !== null) {
        console.log(current);
        current = Object.getPrototypeOf(current);
    }

    console.log("null");
}
// 1. Object Literal
const obj1 = { a: 1, b: 2 };
console.log(Object.getPrototypeOf(obj1));
// 2. new Object()
const obj2 = new Object();
obj2.a = 1;
obj2.b = 2;
console.log(Object.getPrototypeOf(obj2));

// 3. Constructor Function
function Obj(a, b) {
    this.a = a;
    this.b = b;
}
Obj.prototype.testM = function () {
    console.log("Test");
};
const obj3 = new Obj(1, 2);
console.log(Object.getPrototypeOf(obj3));

// 4. Object.create()
const proto = { a: 1 };
const obj4 = Object.create(Obj.prototype);
printPrototypeChain(obj4);
//console.log(Object.getPrototypeOf(obj4));

// 5. Class Syntax
class ObjClass {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    test() { }
}
const obj5 = new ObjClass(1, 2);
console.log(Object.getPrototypeOf(obj5));

// Child
class Child extends ObjClass {
    constructor(a, b) {
        super(a, b);
    }
}
const obj6 = new Child(1, 2);
console.log(Object.getPrototypeOf(obj6)); 