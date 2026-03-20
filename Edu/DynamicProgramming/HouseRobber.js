
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (!nums || nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        const cache = new Int32Array(nums.length).fill(-1);
        cache[0] = nums[0];
        cache[1] = nums[1];
        let max = Math.max(cache[0], cache[1]);
        for (let i = 2; i < nums.length; i++) {

            let index = i - 2;
            let maxIndex = index;
            if (index - 1 >= 0) {
                maxIndex = cache[index] > cache[index - 1] ? index : index - 1;
            }

            cache[i] = nums[i] + cache[maxIndex];
            max = Math.max(max, cache[i]);
        }

        return max;
    }
}

console.log(
    new Solution().rob([3, 3, 4, 3, 0, 1])
);