class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // we can sort
        // then use two pointer to find 3 suitable elements

        nums.sort((a, b) => a - b);
        const set = new Set();

        const ret = [];
        for (let i = 0; i < nums.length - 2; i++) {
            let left = i, right = nums.length - 1;
            while (left != right) {
                const diff = nums[left] + nums[right];
                if (diff < 0) {
                    let thridIndex = right - 1;
                    const prevLength = ret.length;
                    while (thridIndex > left) {
                        const p = [nums[left], nums[thridIndex], nums[right]];
                        if (diff + nums[thridIndex] === 0 && !set.has(p.join(''))) {
                            set.add(p.join(''));
                            ret.push(p);


                            break;
                        }
                        thridIndex--;
                    }
                } else {
                    const prevLength = ret.length;
                    let thridIndex = left + 1;
                    while (thridIndex < right) {
                        const p = [nums[left], nums[thridIndex], nums[right]];
                        if (diff + nums[thridIndex] === 0 && !set.has(p.join(''))) {
                            ret.push(p);
                            set.add(p.join(''));

                            break;
                        }
                        thridIndex++
                    }

                }
                right--;
            }
        }


        return ret;
    }
}



console.log(new Solution().threeSum([0, 0, 0, 0]));