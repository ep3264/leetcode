package com.company;

import java.util.Arrays;
import java.util.HashMap;

public class TwoSum {

    public static void main(String[] args) {
        System.out.println(Arrays.toString(new TwoSum().twoSum(new int[]{1, 3, 6, 9, 11}, 7)));
    }

    public int[] twoSum(int[] nums, int target) {
        var map = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i++) {
            int diff =  target - nums[i];
            Integer index = null;
            if ((index = map.get(diff)) != null) {
                return  new int[] {index, i};
            }
            map.put(nums[i], i);
        }

        return  new int[] {-1, -1};
    }
}
