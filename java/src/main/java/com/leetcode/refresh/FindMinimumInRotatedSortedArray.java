package com.leetcode.refresh;

public class FindMinimumInRotatedSortedArray {

    public static void main(String[] args) {
        System.out.println(
                new FindMinimumInRotatedSortedArray().findMin(new int[]{9, 1, 2, 3, 4, 5, 6})
        );

        System.out.println(
                new FindMinimumInRotatedSortedArray().findMin(new int[]{2, 1})
        );

    }

    public int findMin(int[] nums) {
        int l = 0;
        int r = nums.length - 1;
        while (l < r) {
            if (nums[l] < nums[r]) return nums[l];
            int m = (int) (l + (r - l) / 2.0);

            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return nums[l];
    }
}
