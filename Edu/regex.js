import { log } from './include.js'

let p = /(?<name1>a+?)(?<name2>b)/;
let s = "aaab";
;
let p2 = /[A-Z][a-z]+[0-9]/
console.log(s.match(p));
console.log(s.match(/(a)/g));
console.log(p.test(s));
console.log(p2.test("Alo2"));
console.log(p2.test("A2"));

const s2 = `  f `;
const p3 = /\s{1}/;
log(s2.match(p3));
log(p3.test(s2));


const text = "cat scatter caterpillar cat.";

console.log(text.match(/\bcat\b/g));
// ["cat", "cat"]

const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

console.log(re.test("Abc12345")); // true
console.log(re.test("abc12345")); // false (no uppercase)

const text2 = 'cat "cat" dog cat';

console.log(text2.match(/cat(?=(?:[^"]*"[^"]*")*[^"]*$)/g));
// ["cat", "cat"]


const text3 = `abc`;
console.log(text3.match(/(?=.*[c])abc/));