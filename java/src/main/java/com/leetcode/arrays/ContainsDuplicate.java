package com.leetcode.arrays;

import java.util.Arrays;
import java.util.HashSet;

public class ContainsDuplicate {
    public static void main(String[] args) {
        new ContainsDuplicate().hasDuplicate(new int[]{1, 2, 3, 4, 4, 5});
    }
    public boolean hasDuplicateStreams(int[] nums) {
        return Arrays.stream(nums).distinct().count() < nums.length;
    }

    public boolean hasDuplicate(int[] nums) {
        var set = new HashSet<>();

        for (int n : nums) {
            if (set.contains(n)) {
                return  true;

            }
            set.add(n);
        }
        return  false;

    }
}
