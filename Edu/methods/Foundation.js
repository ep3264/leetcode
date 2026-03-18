//Double every number in the array.

let nums = [1, 2, 3, 4, 5];
let result = nums.map(n => n * 2);

console.log(result); // [2, 4, 6, 8, 10]

// Remove all numbers less than 10.
nums = [3, 15, 7, 42, 8, 20];

result = nums.filter(n => n >= 10);
console.log(result); // [15, 42, 20]

// Sum all the numbers in the array.
nums = [10, 20, 30, 40];

let total = nums.reduce((acc, n) => acc + n, 0);
console.log(total); // 100

// Check if the array contains the number 7.

nums = [1, 3, 5, 7, 9];

result = nums.includes(7);
console.log(result); // true

// Find the first user whose age is over 30.
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 34 },
    { name: "Carol", age: 28 },
];

result = users.find(u => u.age > 30);
console.log(result); // { name: "Bob", age: 34 }


//Check if ALL prices are below 100.

const prices = [49, 79, 35, 95];

result = prices.every(p => p < 100)
console.log(result); // true

// Get a flat list of all tags from every post.

let posts = [
    { title: "A", tags: ["js", "web"] },
    { title: "B", tags: ["node", "js"] },
];

result = posts.flatMap(p => p.tags);
console.log(result); // ["js", "web", "node", "js"]

// Sort products by price, cheapest first.
let products = [
    { name: "B", price: 50 },
    { name: "A", price: 20 },
    { name: "C", price: 35 },
];

const sorted = products.toSorted((a, b) => a.price - b.price);

console.log(sorted[0].name); // "A"

//Count how many times each word appears.

const words = ["cat", "dog", "cat", "bird", "dog", "cat"];

result = words.reduce((acc, word) => {
    acc[word] = (acc[word] ?? 0) + 1;
    return acc;
}, {});

console.log(result); // { cat: 3, dog: 2, bird: 1 }

//Get unique tags across all posts (sorted A–Z).
posts = [
    { tags: ["js", "web", "node"] },
    { tags: ["web", "css", "js"] },
];

result = [...posts.flatMap(p => p.tags).reduce((a, b) => a.add(b), new Set())].toSorted();
/*
    [...new Set(
    posts.flatMap(p => p.tags)
    )].sort();
*/
console.log(result); // ["css", "js", "node", "web"]

// Implement your own map() using only reduce().
function myMap(arr, fn) {
    return arr.reduce(
        (a, b) => {
            a.push(fn(b))
            return a;
        },
        []);
}

console.log(myMap([1, 2, 3], x => x * 2)); // [2, 4, 6]

// Get the top 3 most expensive active products as uppercase names.
products = [
    { name: "alpha", price: 80, active: true },
    { name: "beta", price: 120, active: false },
    { name: "gamma", price: 95, active: true },
    { name: "delta", price: 60, active: true },
    { name: "epsilon", price: 110, active: true },
];

result = products.filter(p => p.active)
    .toSorted((a, b) => b.price - a.price)
    .map(p => p.name.toUpperCase()).slice(0, 3);
console.log(result);  // ["EPSILON", "GAMMA", "ALPHA"]