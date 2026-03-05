function highAndLow(numbers) {
    let low = Number.MAX_VALUE;
    let high = -Number.MAX_VALUE;

    numbers = numbers.split(' ').map(Number);

    for (const n of numbers) {
        if (n < low) low = n;
        if (n > high) high = n;
    }

    return `${high} ${low}`;
}

console.log(highAndLow("5e-324 -1 -33 -5 11"));