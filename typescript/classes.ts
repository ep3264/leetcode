class Base {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }

  /**
   * method
   */
  public method() {
    console.log("Name is = " + this.name);
  }
}

class Derived extends Base {
  name = "derived";
}

const d = new Derived(); // My name is base
d.method(); // Name is = derived
console.log(d.name);
