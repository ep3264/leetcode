const promise = new Promise((resolve, reject) => {
    console.log('Promise executor runs');
    setTimeout(() => {
        resolve('Done');
    }, 1000);
});

promise.then((result) => console.log(result)); // This is attached later