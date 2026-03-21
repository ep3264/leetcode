const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Alex", age: 35 },
];

console.table(users);

console.time("Loop Time");

for (let i = 0; i < 1000000; i++) {
    // Some operation
}

console.timeEnd("Loop Time"); // Output: Loop Time: X ms (X is the time taken)