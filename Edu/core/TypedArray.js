import { log } from "../include.js";

let bytes = new Uint8Array(1024);        // A 1K buffer 
let pattern = new Uint8Array([0, 1, 2, 3]); // An array of 4 bytes 
bytes.set(pattern);      // Copy them to the start of another  byte array 
log(bytes);
bytes.set(pattern, 4);   // Copy them again at a different  offset 
log(bytes);
bytes.set([0, 1, 2, 3], 8); // Or just copy values direct from a  regular array 
log(bytes);
log(bytes.slice(0, 12))       // => new  Uint8Array([0,1,2,3,0,1,2,3,0,1,2,3]) 