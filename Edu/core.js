import {log} from './include.js'

console.log("hello!");

const str = "Hello, world!";
console.log(str);
console.log('\u{1F468}');
console.log('\u{1F980}');
console.log('\u{66}');

let longLine = `the newline character at the end of this line
 is included literally in this string`;

 console.log(longLine);

 console.log(String.raw`\n\r`);

 let x = false;
 console.log(typeof x);

 let fun = x => x + 1;
 let fun2 = fun;

 console.log(fun === fun2);

 let n2 = 10 + "objects";
console.log(n2);



log("It is convinient!");
log (new Number("5").toString(10));

let n = 10;
let	hex	= "0x" + n.toString(16);	
log(Number(hex));

let o = { x : "Hi",
    valueOf : () => 8
};
log (o - 5);
log ([12] - 5);

function myF() {
    this.x = 10;
}

let o2 = new myF();
log(o2.x);
let arr = [,,,6];
for (let x = 0; x < arr.length; x++) {
    log(arr[x]);
}

let o3 = null;
console.log(o3?.x);
log(o3?.x);

let numArr = [4, 8, 33, 1, 3];

log(numArr.sort((a,b) => {
    if ( a < b ) {
        return 1;
    }
    else if ( a === b) {
        return 0;
    }
    else {
        return -1;
    }
}));


let o4 =  {x:1};
//delete o4.x;
log(o4.x);
log(typeof o4.x);

log(2**9);

let i = 10;
log(i++);
let xx = eval("i");
log(xx);

let value = "str";
value = (typeof value === "string") ? "'" + value + "'" :  value.toString();
console.log(value); // => 'str'


let a2 = [1, 3, 5];

delete a2[1];

for (let i = 0; i < a2.length; i++) {
    log(a2[i]);
}
// array for each
for (const z of a2) {
    log(z);
}

let j = 5, y = 6;
let temp = (j, y);
log (temp); // => 6

log ("switch :");
let sw = "xxx";

switch (sw) {
    case "xx" : log(sw); break;
    case "x":
    case "2":
        log("fall through " + sw);
        break;
    default: log("default for " + sw);
}