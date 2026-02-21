async function simulateAsyncOperation(item) {
    // Simulate an asynchronous operation (e.g., fetching data)
    return new Promise(resolve => {
        setTimeout(() => resolve(item), item * 500); // Simulate a delay based on the item value
    });
}

async function processItems(array) {
    // Create an array to hold the promises
    const promises = array.map(item => simulateAsyncOperation(item));
    let queue = [...promises];

    for (const p of queue) {
        p.then(
            res => {
                queue.splice(queue.indexOf(p), 1);
                return res;
            }
        );
    }
    // Process each promise as soon as it resolves
    while (queue.length > 0) {
        // Wait for any promise to resolve
        const result = await Promise.race(queue);
        console.log(result); // Log the resolved value
    }
}

(async () => {
    await processItems([5, 2, 3, 1]);
})();
