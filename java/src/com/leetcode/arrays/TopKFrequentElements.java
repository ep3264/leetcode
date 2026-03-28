package com.leetcode.arrays;

import java.util.*;

public class TopKFrequentElements {
    public static void main(String[] args) {
        System.out.println(
                Arrays.toString(
                        new TopKFrequentElements()
                                .topKFrequent(
                                        new int[]{1, 2, 1, 2, 1, 2, 3, 1, 3, 2},
                                        2)
                )
        );
    }

    public int[] topKFrequent(int[] nums, int k) {
        if (nums.length == 0) return new int[]{};
        var freq = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i++) {
                freq.merge(nums[i], 1, Integer::sum);
         }


        var queue = new PriorityQueue<Map.Entry<Integer,Integer>>(Comparator.comparingInt(Map.Entry::getValue));
        for (var entry : freq.entrySet()) {
            if (queue.size() < k) {
                queue.offer(entry);
            } else {
                if (entry.getValue() > queue.peek().getValue()) {
                    queue.poll();
                    queue.offer(entry);
                }
            }
        }

        return queue.stream().mapToInt(e -> e.getKey().intValue()).toArray();
    }
}
