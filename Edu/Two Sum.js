class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (map.has(diff)) {
                return [map.get(diff), i];
            }
            if (!map.has(nums[i]))
                map.set(nums[i], i);
        }
        return [];
    }

}

const sol = new Solution();
const nums = [5, 5, 3], target = 8;
console.log(sol.twoSum(nums, target));
