package com.leetcode;

public class ReverseBits {

    public static void main(String[] args) {
        System.out.println(
               new ReverseBits().reverseBits(2)
        );
    }

    public int reverseBits(int n) {
        var result = 0;
        int bit = 31;
        while (n != 0) {
            result = result | ((n & 1) << bit);
            n = n >>> 1;
            bit--;
        }

        System.out.println(n);
        String bits = String.format("%32s", Integer.toBinaryString(result))
                .replace(' ', '0');
        System.out.println(bits);
        return  result;

    }
}


