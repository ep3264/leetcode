package com.leetcode;

public class ClimbingStairsArray {

    public static void main(String[] args) {
        System.out.println(new ClimbingStairsArray().climbStairs(3));
    }

    public int climbStairs(int n) {
        if (n <= 2) {
            return n;
        }
       var arr = new int[n + 1];

        arr[1] = 1;
        arr[2] = 2;

        for (int i = 3; i <= n; i++) {
            var nPaths = arr[i - 1] + arr[i - 2];
            arr[i] = nPaths;
        }

        return arr[n];
    }
}
