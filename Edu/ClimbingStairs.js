class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (!n) return 0;

        const cache = new Map();

        const factorial = (n) => {
            if (n === 0 || n === 1) {
                return 1;
            }
            if (cache.has(n)) {
                return cache.get(n);
            }
            const ret = n * factorial(n - 1);
            cache.set(n, ret);
            return ret;
        }

        let cur = n;
        let counter = 1;
        let place = 1;
        while (cur > place) {
            cur--;
            const inc = factorial(cur) / (factorial(place) * factorial(cur - place));
            counter += inc;
            place++;
        }

        return counter;
    }
}


const s = new Solution;

console.log(s.climbStairs(6));