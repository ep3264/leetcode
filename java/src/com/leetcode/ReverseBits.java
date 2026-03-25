package com.leetcode;

public class ReverseBits {

    public static void main(String[] args) {
        System.out.println(
               new ReverseBits().reverseBits(5)
        );
    }

    public int reverseBits(int n) {
        int ret = n;
        ret = ret >>> 16 | ret << 16;
        ret = (ret & 0xff00ff00) >>> 8 | (ret & 0x00ff00ff) << 8;
        ret = (ret & 0xf0f0f0f0) >>> 4 | (ret & 0x0f0f0f0f) << 4;
        ret = (ret & 0xcccccccc) >>> 2 | (ret & 0x33333333) << 2;
        ret = (ret & 0xaaaaaaaa) >>> 1 | (ret & 0x55555555) << 1;
        System.out.println(String.format("%32s", Integer.toBinaryString(n))
                .replace(' ', '0'));
        String bits = String.format("%32s", Integer.toBinaryString(ret))
                .replace(' ', '0');
        System.out.println(bits);
        return  ret;

    }
}


