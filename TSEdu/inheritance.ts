import { Dogg } from "./Dogg";

class Base {
  protected x: number = 1;

  getX() {
    return this.x;
  }
}

class Derived1 extends Base {
  protected x: number = 5;
}

class Derived2 extends Base {
  f1(other: Derived2) {
    other.x = 10;
  }

  f2(other: Base) {
    //other.x = 10; // error
  }
}

const b: Base = new Derived2();

(b as Derived2).f1(b as Derived2);
console.log(b.getX());

const dogg: Dogg = new Dogg();
dogg.hello();

class IncludeTest {
  printMsg() {
    console.log("Parent");
  }
}

class Incz extends IncludeTest {
  printMsg(): void {
    console.log("Child");
  }
}

const ic: IncludeTest = new Incz();
ic.printMsg();
