class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let i = 31;
        let j = 0;
        let result = 0;
        while (j < 32) {
            const shift = 1 << j;
            if ((n & shift) !== 0) {
                result = result | (1 << i);
            }
            j++;
            i--;
        }
        return result >>> 0;
    }
}

const sol = new Solution;

console.log(sol.reverseBits(21));