package com.leetcode;

import java.util.Arrays;

public class CountingBits {

    public static void main(String[] args) {
        System.out.println(
                Arrays.toString(new CountingBits().countBits(11))
        );
    }

    public int[] countBits(int n) {
        var result = new int[n + 1];

        if (n == 0)
            return result;
        result[1] = 1;

        for (int i = 2; i < n + 1; i++) {
            result[i] = result[i & i - 1] + 1;
        }

        return result;
    }
}