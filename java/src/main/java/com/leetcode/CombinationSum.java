package com.leetcode;

import java.util.ArrayList;
import java.util.List;

public class CombinationSum {
    public static void main(String[] args) {
        System.out.println(
                new CombinationSum()
                        .combinationSum(new int[]{2, 5, 6, 9}, 9)
        );
    }

    public List<List<Integer>> combinationSum(int[] nums, int target) {
        List<List<Integer>> result = new ArrayList<>();
        combinationSum(result, 0, new ArrayList<>(), nums, target);

        return result;
    }

    public void combinationSum(List<List<Integer>> result, int start, List<Integer> current, int[] nums, int target) {

        if (target < 0) return;

        if (target == 0)
            result.add(new ArrayList<>(current));

        for (int i = start; i < nums.length; i++) {
            current.add(nums[i]);

            combinationSum(result, i, current, nums, target - nums[i]);

            current.remove(current.size() - 1);

        }

    }
}
