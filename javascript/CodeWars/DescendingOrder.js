function descendingOrder(n) {
    const digits = [];
    while (n > 0) {

        const digit = n % 10;
        n = Math.trunc(n / 10);
        digits.push(digit);
    }


    return digits.sort((a, b) => b - a).reduce(
        (p, c) => { return p * 10 + c; },
        0
    )
}

console.log(descendingOrder(1021));
