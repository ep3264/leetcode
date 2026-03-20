/*
    1. Execute all code in Call Stack
    2. Process ALL microtasks
    3. Take ONE macrotask
    4. Repeat
*/

setTimeout(() => console.log("1"), 0);

Promise.resolve().then(() => {
    console.log("2");
    setTimeout(() => console.log("3"), 0);
});

Promise.resolve().then(() => {
    console.log("5");
});

console.log("4");