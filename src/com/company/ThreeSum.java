package com.company;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ThreeSum {
    public static void main(String[] args) {
        System.out.println(new ThreeSum().threeSum(new int[]{-1, 0, 1, 2, -1, -4}));
    }

    public List<List<Integer>> threeSum(int[] nums) {
        var result = new ArrayList<List<Integer>>();
        if (nums == null || nums.length < 3) return result;

        Arrays.sort(nums);
        for (var i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            if (nums[i] > 0) break;
            var cur = nums[i];
            var left = i + 1;
            var right = nums.length - 1;

            while (left < right) {
                var sum = cur + nums[left] + nums[right];
                if (sum == 0) {
                    result.add(List.of(cur, nums[left], nums[right]));
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1]) left++;
                    while (left < right && nums[right] == nums[right + 1]) right--;
                }
                else if (sum < 0) left++;
                else right--;
            }

        }

        return result;
    }
}
