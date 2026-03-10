class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // we can sort
        // then use two pointer to find 3 suitable elements

        nums.sort((a, b) => a - b);
        const indicies = new Set();
        let left = 0, right = nums.length - 1;
        const ret = [];
        while (left != right) {
            const diff = nums[left] + nums[right];
            if (diff < 0) {
                let thridIndex = right - 1;
                const prevLength = ret.length;
                while (thridIndex > left) {
                    if (diff + nums[thridIndex] === 0 && !indicies.has(thridIndex)) {
                        ret.push([nums[left], nums[thridIndex], nums[right]]);
                        indicies.add(thridIndex);
                        left++;
                        right--;
                        break;
                    }
                    thridIndex--;
                }
                if (prevLength === ret.length) left++;
            } else {
                const prevLength = ret.length;
                let thridIndex = left + 1;
                while (thridIndex < right) {
                    if (diff + nums[thridIndex] === 0 && !indicies.has(thridIndex)) {
                        ret.push([nums[left], nums[thridIndex], nums[right]]);
                        indicies.add(thridIndex);
                        left++;
                        right--;
                        break;
                    }
                    thridIndex++
                }
                if (prevLength === ret.length) right--;
            }

        }

        return ret;

    }
}


console.log(new Solution().threeSum([-1, 0, 1, 2, -1, -4]));