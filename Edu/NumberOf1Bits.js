class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let cur = n;
        let count = 0;
        while (cur) {
            if (cur & 1) {
                count++;
            }
            cur = cur >>> 1;
        }
        return count;
    }

}

const sol = new Solution;

console.log(sol.hammingWeight(15));