package com.leetcode;

public class MissingNumber {
    public static void main(String[] args) {
        System.out.println(
                new MissingNumber().missingNumber(new int[]{0, 2, 3, 4})
        );

    }

    public int missingNumber(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        int n = nums.length;
        int ret = n;
        for (int i = 0; i < n; i++) {
            ret ^=  i ^ nums[i];
        }

        return ret;
    }

}
