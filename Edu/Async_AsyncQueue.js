class AsyncQueue {
    constructor() {
        this.queue = [];     // Holds the values
        this.resolveQueue = []; // Holds the consumers waiting for values
        this.closed = false;  // Flag to check if queue is closed
    }

    // Add a value to the queue
    enqueue(value) {
        if (this.closed) throw new Error("Queue is closed");

        // If there are pending consumers, resolve the next one with the value
        if (this.resolveQueue.length > 0) {
            const resolve = this.resolveQueue.shift();
            resolve({ value, done: false });
        } else {
            // Otherwise, add value to the queue
            this.queue.push(value);
        }
    }

    // Return a promise that resolves with the next value in the queue
    dequeue() {
        if (this.queue.length > 0) {
            const value = this.queue.shift();
            return Promise.resolve({ value, done: false });
        } else if (this.closed) {
            return Promise.resolve({ value: undefined, done: true });
        } else {
            // Return a promise that will resolve later
            return new Promise(resolve => {
                this.resolveQueue.push(resolve);
            });
        }
    }

    // Close the queue, no more values will be added
    close() {
        this.closed = true;

        // Resolve all remaining pending consumers with a done signal
        while (this.resolveQueue.length > 0) {
            const resolve = this.resolveQueue.shift();
            resolve({ value: undefined, done: true });
        }
    }

    // Symbol.asyncIterator implementation
    [Symbol.asyncIterator]() {
        return {
            next: () => this.dequeue()
        };
    }
}


const queue = new AsyncQueue();

// Producer: asynchronously enqueues values
setTimeout(() => queue.enqueue(1), 200);
setTimeout(() => queue.enqueue(2), 1500);
setTimeout(() => queue.enqueue(3), 1000);
setTimeout(() => queue.enqueue(4), 500);
setTimeout(() => queue.close(), 2000); // Close the queue after adding values

// Consumer: using for-await to consume the queue
(async () => {
    for await (const value of queue) {
        console.log(value);  // Logs 1, then 2
    }
    console.log("Queue is closed");
})();
