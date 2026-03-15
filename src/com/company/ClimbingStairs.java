package com.company;

import java.util.HashMap;

public class ClimbingStairs {

    public static void main(String[] args) {
        System.out.println(new ClimbingStairs().climbStairs(3));
    }

    public int climbStairs(int n) {
        var map = new HashMap<Integer, Integer>();

        map.put(1, 1);
        map.put (2, 2);

        for (int i = 3; i <= n; i++) {
            var nPaths = map.get(i - 1) + map.get(i - 2);
            map.put(i, nPaths);
        }

        return  map.get(n);
    }
}
