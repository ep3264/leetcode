class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        for (const n of nums) {
            if (set.has(n)) {
                return true;
            }
            set.add(n);
        }
        return false;

    }
}
const nums = [1, 2, 3, 3];

const sol = new Solution();
console.log(sol.hasDuplicate(nums));

