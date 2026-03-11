class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // we can sort
        // then use two pointer to find 3 suitable elements

        nums.sort((a, b) => a - b);

        const ret = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

            let left = i + 1, right = nums.length - 1;
            while (left < right) {


                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    const p = [nums[i], nums[left], nums[right]];
                    ret.push(p);
                    // skip duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    // [a + b + c]  are == 0 and unique only if b c different => inc both 
                    left++;
                    right--;
                }

                else if (sum < 0) left++;
                else right--;

            }
        }


        return ret;
    }
}

console.log(new Solution().threeSum([0, 0, 0, 0])); // [ [0, 0, 0] ] 
console.log(new Solution().threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
/*

  [ -4, -2, 6 ],
  [ -4, 0, 4 ],
  [ -4, 1, 3 ],
  [ -4, 2, 2 ],
  [ -2, -2, 4 ],
  [ -2, 0, 2 ]
*/