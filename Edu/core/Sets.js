import {
    log
} from "../include.js"

let s = new Set();

let o = {
    x: 1
};

s.add(o);

o.x = 2;

log(s);

log(s.has(o));
