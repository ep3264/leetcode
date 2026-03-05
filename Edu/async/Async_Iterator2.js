class AsyncNumberIterator {
    constructor(maxNumber, delay) {
        this.current = 0;
        this.maxNumber = maxNumber;
        this.delay = delay;
    }

    // A helper function to simulate an asynchronous delay
    async _delay() {
        return new Promise(resolve => setTimeout(resolve, this.delay));
    }

    // The async iterator protocol requires this next() method
    async next() {
        // Simulate delay before yielding the next value
        await this._delay();

        if (this.current <= this.maxNumber) {
            // Return the next value along with 'done: false'
            return {
                value: this.current++, // Increment value after yielding
                done: false
            };
        } else {
            // When iteration is complete, return 'done: true'
            return {
                value: undefined,
                done: true
            };
        }
    }

    // This method allows usage with 'for await...of'
    [Symbol.asyncIterator]() {
        return this;
    }
}

// Usage Example:

async function runAsyncIterator() {
    const asyncIterator = new AsyncNumberIterator(5, 1000);  // maxNumber = 5, delay = 1000ms

    for await (const num of asyncIterator) {
        console.log(num); // Logs numbers 0 to 5, with 1-second delay between each
    }
}

runAsyncIterator();
