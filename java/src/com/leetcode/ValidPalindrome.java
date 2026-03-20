package com.leetcode;

public class ValidPalindrome {

    public static void main(String[] args) {
        System.out.println(new ValidPalindrome().isPalindrome("tatat"));
    }
    public boolean isPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;
        while (left < right) {

            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
                left++;
            }
            while (left < right &&  !Character.isLetterOrDigit(s.charAt(right))) {
                right--;
            }

            if (!String.valueOf(s.charAt(left)).equalsIgnoreCase(String.valueOf(s.charAt(right)))) return false;

            left++;
            right--;

        }

        return  true;
    }
}
