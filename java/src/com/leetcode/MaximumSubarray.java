package com.leetcode;

import java.util.Arrays;

public class MaximumSubarray {
    public static void main(String[] args) {
        System.out.println(
                new MaximumSubarray().maxSubArray(
                        new int[]{2, -3, 4, -2, 2, 1, -1, 4}
                )
        );
    }

    public int maxSubArray(int[] nums) {
        if (nums.length == 1) return nums[0];

        int prev = nums[0];
        int max = prev;
        for (int i = 1; i < nums.length; i++) {
            prev = Math.max(prev + nums[i], nums[i]);
            max = Math.max(prev, max);
        }

        return max;
    }
}
