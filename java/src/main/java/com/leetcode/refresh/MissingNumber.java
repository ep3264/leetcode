package com.leetcode.refresh;

public class MissingNumber {
    public static void main(String[] args) {
        System.out.println(
                new MissingNumber().missingNumber(new int[]{0, 2, 3, 4})
        );
    }

    public int missingNumber(int[] nums) {
        int missing = nums.length;
        for (int i = 0; i < nums.length; i++) {
            missing ^= i ^ nums[i];
        }

        return missing;
    }

}
