import { log } from './include.js'

const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Phone", price: 800, category: "Electronics" },
  { name: "T-shirt", price: 20, category: "Clothing" },
  { name: "Shoes", price: 50, category: "Clothing" },
  { name: "Fridge", price: 700, category: "Appliances" }
];

let totalCost = 0;

// Using the for loop to iterate over the array
for (let i = 0; i < products.length; i++) {
  console.log(`Product: ${products[i].name}, Price: ${products[i].price}, Category: ${products[i].category}`);
  totalCost += products[i].price;
}
console.log("Total Cost of All Products:", totalCost);

const products2 = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "T-shirt", price: 20 },
  { name: "Shoes" }, // No price
  null // Invalid product
];

totalCost = 0;

for (const product of products2) {
  if (!product || !product.price) {
    console.log("Skipping invalid product:", product);
    continue; // Skip invalid or missing price
  }

  console.log(`Product: ${product.name}, Price: ${product.price}`);
  totalCost += product.price;
}

console.log("Total Cost:", totalCost);

let o = { x: 1, y: 2, z: 3 };
let keys = "";
for (let k of Object.keys(o)) {
  keys += k;
}
log(keys);  // => "xyz" 

let sum = 0;
for (let v of Object.values(o)) {
  sum += v;
}
log(sum);

let pairs = "";
for (let [k, v] of Object.entries(o)) {
  pairs += k + v;
}
log(pairs);  // => "x1y2z3" 

let frequency = {};
for (let letter of "mississippi") {
  if (frequency[letter]) {
    frequency[letter]++;
  } else {
    frequency[letter] = 1;
  }
}
log(frequency);   // => {m: 1, i: 4, s: 4, p: 2}

let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for (let word of wordSet) {
  unique.push(word);
}
log(unique); // => ["Na", "na", "Batman!"] 

let m = new Map([[1, "one"], [2, "two"]]);
for (let [key, value] of m) {
  log(key);   // => 1
  log(value);  // => "one" 
}


let a3 = [1, 2, 3, 4];

lab: for (let i = 0; i < a3.length; i++) {
  for (let j = 0; j < a3.length; j++) {
    if (i === 2) break lab;
    log(a3[i] + " " + a3[j]);
  }
}
log("");
lab: for (let i = 0; i < a3.length; i++) {
  for (let j = 0; j < a3.length; j++) {
    if (i === 2) continue lab;
    log(a3[i] + " " + a3[j]);
  }
}