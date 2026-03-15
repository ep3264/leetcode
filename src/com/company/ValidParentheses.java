package com.company;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Map;

public class ValidParentheses {
    public static void main(String[] args) {
        System.out.println(new ValidParentheses().isValid("{}{[]}()(())"));
    }

    public boolean isValid(String s) {
        if (s.length() < 2) return  false;
        var map = Map.of(
                '{', '}',
                '[', ']',
                '(', ')'
        );

       Deque<Character> stack = new ArrayDeque<>();
       for (int i = 0; i < s.length(); i++) {
                final Character c = s.charAt(i);
                if (map.get(c) != null) {
                    stack.push(c);
                } else if (!stack.isEmpty() && map.get(stack.peek()).equals(c)) {
                    stack.pop();
                } else return  false;
        }
        return  stack.isEmpty();
    }
}
