
async function* createAsyncIterator(array) {
    for (const item of array) {
        // Simulate an asynchronous operation (e.g., fetching data)
        await new Promise(resolve => setTimeout(resolve, item * 500));
        yield item;
    }
}

(async () => {
    const asyncIterator = createAsyncIterator([5, 2, 3, 1]);
    for await (const value of asyncIterator) {
        console.log(value); // Logs 5 2 3 1 preserve order even if there are tasks that can be completed
    }
})(); 