package com.leetcode.refresh;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Map;

public class ValidParentheses {
    public static void main(String[] args) {
        System.out.println(new ValidParentheses().isValid("{}{[]}()(())"));
    }

    public boolean isValid(String s) {
        if (s.length() % 2 != 0) return false;
        var st = new int[s.length() + 1];
        int pointer = 0;

        for (char c : s.toCharArray()) {
            if (c == '(' || c == '[' || c == '{')
                st[++pointer] = c;

            else {
                if (pointer == 0)
                    return false;

                if ((c == ')' && st[pointer] == '(') ||
                        (c == '}' && st[pointer] == '{') ||
                        (c == ']' && st[pointer] == '[')) {
                    pointer--;

                } else
                    return false;
            }
        }
        return pointer == 0;
    }
}
