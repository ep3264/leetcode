
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        const cache = new Int32Array(nums.length).fill(-1);
        cache[0] = nums[0];
        cache[1] = nums[1];
        for (let i = 2; i < nums.length; i++) {

            let index = i - 2;
            let max = index;
            while (index >= 0) {
                index--;
                if (cache[index] > cache[max]) max = index;
            }

            cache[i] = nums[i] + cache[max];
        }

        let max = 0;

        for (const n of cache) {
            if (n > max) max = n;
        }

        return max;
    }
}

console.log(
    new Solution().rob([3, 3, 4, 3, 0, 1])
);