//Sieve of Eratosthenes
function sieve(n) {
    let a = new Uint8Array(n + 1);
    let max = Math.floor(Math.sqrt(n));
    while (p <= max) {
        for (let i = 2 * p; i <= n; i += p)
            a[i] = 1;
        while (a[++p]);
    }
    while (a[n]) n--;
    return n;
}