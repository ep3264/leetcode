package com.leetcode.refresh;

import java.util.HashMap;

public class ValidAnagram {

    public static void main(String[] args) {
        System.out.println(
            new ValidAnagram().isAnagram("racecar", "carrace")
        );
    }

    public boolean isAnagram(String s, String t) {
        var map = new HashMap<Character, Integer >();

        for (Character c : s.toCharArray()) {
            map.merge(c, 1, Integer::sum);
        }

        for (Character c : t.toCharArray()) {
            if (!map.containsKey(c)) return false;

            Integer num = map.get(c);
            if (num == 1) map.remove(c);
            else map.put(c, num - 1);
        }

        return map.size() == 0;
    }
}
