class Animal {
    // Private field
    #energy = 100;
    
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    // Public methods
    speak() {
      return `${this.name} makes a noise.`;
    }
  
    eat() {
      this.#energy += 10;
      return `${this.name} is eating. Energy: ${this.#energy}`;
    }
  
    sleep() {
      this.#energy += 20;
      return `${this.name} is sleeping. Energy: ${this.#energy}`;
    }
  }
  
  const lion = new Animal('Lion', 'Big Cat');
  console.log(lion.speak()); // Output: "Lion makes a noise."
  console.log(lion.eat());   // Output: "Lion is eating. Energy: 110"
  console.log(lion.sleep()); // Output: "Lion is sleeping. Energy: 130"