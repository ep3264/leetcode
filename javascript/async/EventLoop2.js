
setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
    .then(() => console.log("promise 1"))
    .then(() => console.log("promise 2"));

setTimeout(() => console.log("timeout 2"), 0);