package com.leetcode;

public class ValidAnagram {
    public static void main(String[] args) {
        System.out.println(new ValidAnagram().isAnagram("cat", "tac"));
    }

    public boolean isAnagramSorted(String s, String t) {
        if (s.length() != t.length()) return  false;
        var sSorted= s.chars().sorted().toArray();
        var tSorted = t.chars().sorted().toArray();

        for (int i = 0; i < sSorted.length; i++) {
            if (sSorted[i] != tSorted[i]) return false;
        }

        return  true;
    }
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return  false;

        var count = new int[26];


        for (var i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }

        for (var n : count) {
            if (n != 0) return  false;
        }

        return true;
    }
}
