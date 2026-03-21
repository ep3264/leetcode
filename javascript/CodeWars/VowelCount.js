function getCount(str) {
    const p = /[aeiou]/;
    let counter = 0;
    for (const c of str) {
        if (p.test(c)) counter++;
    }
    return counter;
}

console.log(getCount("abracadabra"));