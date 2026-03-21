class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (const n of nums) {
            if (seen.has(n)) {
                return true;
            }
            seen.add(n);
        }

        return false;
    }

}

const nums = [1, 2, 3, 3];

console.log(
    new Solution().hasDuplicate(nums)
);

