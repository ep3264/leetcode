console.log("Begin!");
const promise = new Promise((resolve, reject) => {
    console.log('Promise executor runs');
    setTimeout(() => {
        resolve('Done');
    }, 3000);
});

console.log("Global message!");
promise.then((result) => console.log(result)); // This is attached later