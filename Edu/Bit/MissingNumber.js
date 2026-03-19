class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;

        const sum = (n * (n + 1)) / 2;
        const actualSum = nums.reduce((p, c) => p + c);

        return sum - actualSum;
    }
}


const sol = new Solution;

console.log(sol.missingNumber([1, 2, 3]));