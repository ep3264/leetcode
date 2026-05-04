package com.leetcode.dynamic;

public class HouseRobber {
    public static void main(String[] args) {

        System.out.println(
                new HouseRobber().rob(
                        new int[]{3, 3, 4, 3, 0, 1}
                )
        );
    }

    public int rob(int[] nums) {
        if (nums.length == 1) return nums[0];

        int[] cache = new int[nums.length];

        cache[0] = nums[0];
        cache[1] = Math.max(cache[0], nums[1]);
        for (int i = 2; i < nums.length; i++) {
            cache[i] = Math.max(cache[i - 2] + nums[i], cache[i - 1]);

        }

        return cache[cache.length - 1];
    }
}
