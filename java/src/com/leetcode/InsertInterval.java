package com.leetcode;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class InsertInterval {

    public static void main(String[] args) {

        var res = new InsertInterval().insert(
                new int[][]{{1, 2}, {3, 5}, {6, 7}, {8, 10}, {12, 16}},
                new int[]{4, 8}
        );

        for (var arr : res) {
            System.out.println(Arrays.toString(arr));
        }

        var res2 = new InsertInterval().insert(
                new int[][]{{1, 5}, {6, 8}},
                new int[]{7, 9}
        );

        for (var arr : res2) {
            System.out.println(Arrays.toString(arr));
        }
    }

    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> result = new ArrayList<>();
        if (intervals.length == 0) {
            result.add(newInterval);
            return result.toArray(new int[0][]);
        }

        int i = 0;
        for (; i < intervals.length; i++) {
            var cur = intervals[i];
            if (cur[0] > newInterval[1]) {
                result.add(newInterval);
                result.add(cur);
                break;
            }
            if (newInterval[0] <= cur[1]) {
                int start = cur[0];
                if (newInterval[0] <= cur[0]) start = newInterval[0];
                int end = cur[1];
                while (intervals[i][1] < newInterval[1] && i < intervals.length - 1)  i++;

                if (intervals[i][0] > newInterval[1]) i--;
                if (intervals[i][1] > newInterval[1]) end = intervals[i][1];
                else {
                    end = newInterval[1];
                }

                result.add(new int[]{start, end});
                break;


            } else {
                result.add(intervals[i]);
            }
        }
        if (i == intervals.length) {
            result.add(newInterval);
        }

        int j = i + 1;
        while (j < intervals.length) {
            result.add(intervals[j]);
            j++;
        }

        return result.toArray(new int[0][]);
    }

}
