package com.leetcode.refresh;

public class NumberOf1Bits {
    public int hammingWeight(int n) {
        int nunBits = 0;
        while (n > 0) {
            n = n & n - 1;

            nunBits++;
        }

        return nunBits;
    }

    public static void main(String[] args) {
        System.out.println(new NumberOf1Bits().hammingWeight(3));

    }
}
