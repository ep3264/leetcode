package com.leetcode.refresh;

public class ReverseBits {

    public static void main(String[] args) {
        System.out.println(
               new ReverseBits().reverseBits(5)
        );
    }

    public int reverseBits(int n) {
        n = n << 16 & 0xFFFF0000 | n >>> 16 & 0xFFFF;
        n = n << 8 & 0xFF00FF00 | n >>> 8 & 0x00FF00FF;
        n = n << 4 & 0xF0F0F0F0 | n >>> 4 & 0x0F0F0F0F;
        n = n << 2 & 0xCCCCCCCC | n >>> 2 & 0x33333333;

        return n << 1 & 0xAAAAAAAA | n >>> 1 & 0x55555555;
    }
}


