package com.leetcode.intervals;

import java.util.Arrays;
import java.util.Comparator;

public class NonOverlappingIntervals {

    public static void main(String[] args) {
        System.out.println(
                new NonOverlappingIntervals()
                        .eraseOverlapIntervals(
                                new int[][]{
                                        {0, 2}, {1, 3}, {2, 4}, {3, 5}, {4, 6}
                                }
                        )
        );
    }

    public int eraseOverlapIntervals(int[][] intervals) {
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[1]));
        int result = 0;
        int j = 1;
        for (int i = 0; i < intervals.length - 1 && j < intervals.length; i++, j++) {
            while (j < intervals.length && intervals[i][1] > intervals[j][0]) {
                result++;
                j++;
            }
            i = j - 1;
        }
        return result;
    }
}
