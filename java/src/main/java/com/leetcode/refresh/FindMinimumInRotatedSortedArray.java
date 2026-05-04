package com.leetcode.refresh;

public class FindMinimumInRotatedSortedArray {

    public static void main(String[] args) {
        /*
        System.out.println(
                new FindMinimumInRotatedSortedArray().findMin(new int[]{9, 1, 2, 3, 4, 5, 6})
        );

         */
        System.out.println(
                new FindMinimumInRotatedSortedArray().findMin(new int[]{2, 1})
        );

    }

    public int findMin(int[] nums) {
        if (nums.length == 1) return nums[0];

        int l = 0;
        int r = nums.length - 1;
        if (nums[l] < nums[r]) return nums[l];

        while (l < r) {
            int m = (int) Math.ceil(l + (r - l) / 2.0);

            if (nums[m] < nums[l]) {
                for (int i = m; i > l; i--) {
                    if (nums[i] <= nums[i - 1])  return nums[i];
                }
            } else {
                l = m;
            }
        }

        return nums[l];
    }

}
