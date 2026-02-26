class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [0];
        if (n === 0)
            return res;
        res.push(1);
        let cur = 2;

        while (cur <= n) {

            let temp = cur;
            let count = 0;
            while (temp) {
                temp &= temp - 1;
                count++;
            }
            res.push(count);

            cur++;
        }
        return res;
    }
}

const n = 16;
const sol = new Solution;
console.log(sol.countBits(n));