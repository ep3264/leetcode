let o = { 'x': 5 };
console.log(o.valueOf());
console.log(o);
console.log(o.toString());


const l = console.log;

l(['a', 'c', '13'].toString());

const r = 1 - {};
l(r);

l(String(undefined));

l(typeof null);

let n = 123456.789;
l(n.toPrecision(9));

let s = "atest";

l(s.charCodeAt(0));