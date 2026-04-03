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

        int [] sums = new int[nums.length];
        sums[0] = nums[0];
        int max = sums[0];
        for (int i = 1; i < nums.length; i++) {
            sums[i] = Math.max(sums[i - 1] + nums[i], nums[i]);
            max = Math.max(sums[i], max);
        }

        return max;
    }
}
