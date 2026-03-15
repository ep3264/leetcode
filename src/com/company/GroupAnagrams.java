package com.company;

import java.util.*;

public class GroupAnagrams {
    public static void main(String[] args) {
        System.out.println(new GroupAnagrams().groupAnagrams(new String[]{"act", "pots", "tops", "cat", "stop", "hat"}));
    }

    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs == null || strs.length == 0) return new ArrayList<>();

        Map<String, List<String>> res = new HashMap<>();
        for (String s : strs) {
            int[] count = new int[26];
            for (char c : s.toCharArray()) {
                count[c - 'a']++;
            }
            String key = Arrays.toString(count);
            res.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(res.values());

    }
}
