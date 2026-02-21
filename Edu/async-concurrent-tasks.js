async function simulateAsyncOperation(item) {
    // Simulate an asynchronous operation (e.g., fetching data)
    return new Promise(resolve => {
        setTimeout(() => resolve(item), item * 500); // Simulate a delay based on the item value
    });
}

async function processItems(array) {
    // Create an array to hold the promises
    const promises = array.map(item => simulateAsyncOperation(item));
    for (const p of promises) {
        (async (promise) => {

            const result = await promise;
            console.log(result);

        })(p);
    }


}

(async () => {
    await processItems([5, 2, 3, 1]);
})();
