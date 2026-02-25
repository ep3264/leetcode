const obj = {
    name: "John",
    greet: () => {
        console.log(this?.name); // undefined
    }
};

obj.greet(); // undefined


const obj2 = {
    name: "John",
    greet: function () {
        const self = this;
        function nested() {
            console.log(this?.name); // undefined
            console.log(self?.name); // John
        }
        const nested2 = function () {
            console.log(this?.name); // undefined
        };

        const nested3 = (function () {
            console.log(this?.name); // John
        }).bind(this);

        const nested4 = () => console.log(this.name); //  // John



        console.log(this?.name); // John

        nested();
        nested2();
        nested3();
        nested4();
        nested2.call(this); //  John
        nested2.apply(this); //  John
    }
};

obj2.greet(); // John