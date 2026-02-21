let p = /(?<name1>a+?)(?<name2>b)/;
let s = "aaab";
;
let p2 = /[A-Z][a-z]+[0-9]/
console.log(s.match(p));
console.log(s.match(/(a)/g));
console.log(p.test(s));
console.log(p2.test("Alo2"));
console.log(p2.test("A2"));

