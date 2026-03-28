package com.leetcode.bit;

public class NumberOf1Bits {
    public int hammingWeight(int n) {
        int numBits = 0;
        int cur = n;
        while (cur != 0) {

            cur &= cur - 1;
            numBits++;
        }

        return numBits; //   Integer.bitCount(n);
    }

    public static void main(String[] args) {
        System.out.println(new NumberOf1Bits().hammingWeight(3));

    }
}
