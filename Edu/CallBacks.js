class Button {
    constructor(label) {
      this.label = label;
    }
  
    click() {
      console.log(`${this.label} button clicked!`);
    }
  }


  let b = new Button("MyLabel");
  test(b.click.bind(b));

  function test(f) {
    f();
  }