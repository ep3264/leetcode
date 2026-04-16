package com.leetcode.refresh;

public class ValidPalindrome {

    public static void main(String[] args) {
        System.out.println(
                new ValidPalindrome().isPalindrome(
                        "Was it a car or a cat I saw?"
                )
        );
    }

    public boolean isPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            if (!Character.isLetterOrDigit(s.charAt(left))) {
                left++;
                continue;
            }

            if (!Character.isLetterOrDigit(s.charAt(right))) {
                right--;
                continue;
            }

            if(Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }

        return true;

    }
}
