package com.leetcode.graph;

import java.util.*;
import java.util.List;
import java.util.function.BiPredicate;


public class PacificAtlanticWaterFlow {

    public static void main(String[] args) {
        System.out.println(
                new PacificAtlanticWaterFlow().pacificAtlantic(new int[][]{
                        {1, 2, 2, 3, 5}, {3, 2, 3, 4, 4}, {2, 4, 5, 3, 1}, {6, 7, 1, 4, 5}, {5, 1, 1, 2, 4}
                })
        );

        System.out.println(
                new PacificAtlanticWaterFlow().pacificAtlantic(new int[][]{
                        {4, 2, 7, 3, 4},
                        {7, 4, 6, 4, 7},
                        {6, 3, 5, 3, 6}
                })
        );

        System.out.println(
                new PacificAtlanticWaterFlow().pacificAtlantic(new int[][]{{1}, {1}})
        );
    }

    private record Point(int x, int y) {}
    private Set<Point> pacific = new HashSet<>();
    private Set<Point> atlantic = new HashSet<>();

    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        if (heights == null || heights.length == 0) return Collections.emptyList();

        var result = new ArrayList<List<Integer>>();

        for (int i = 0; i < heights.length; i++) {
            int m = heights[i].length;
            for (int j = m - 1; j >= 0; j--) {
                if (test(i, j, heights)) {
                    result.add(new ArrayList<>(List.of(i, j)));
                }
            }
        }

        return result;
    }

    private boolean test(int i, int j, final int[][] heights) {
        return canFlow(i, j, heights, (a, b) -> a == 0 || b == 0, new HashSet<>(), pacific)
                && canFlow(i, j, heights, (a, b) -> a == heights.length - 1 || b == heights[a].length - 1, new HashSet<>(), atlantic);
    }

    private boolean canFlow(int i, int j, int[][] heights, BiPredicate<Integer, Integer> p, Set<Point> visited,
                            Set<Point> reachable) {
        if (p.test(i, j)) {
            return true;
        }
        if (reachable.contains(new Point(i, j))) return true;

        if (visited.contains(new Point(i, j)))
            return false;

        visited.add(new Point(i, j));

        boolean ret =
                ((i - 1 >= 0) && heights[i][j] >= heights[i - 1][j] && canFlow(i - 1, j, heights, p, visited, reachable))
                ||
                ((j - 1 >= 0) && heights[i][j] >= heights[i][j - 1]
                        && canFlow(i, j - 1, heights, p, visited, reachable))
                ||
                ((i + 1 < heights.length) && heights[i][j] >= heights[i + 1][j]
                        && canFlow(i + 1, j, heights, p, visited, reachable))
                || ((j + 1 < heights[i].length)
                && heights[i][j] >= heights[i][j + 1] && canFlow(i, j + 1, heights, p, visited, reachable));

        if (ret) reachable.add(new Point(i, j));

        return ret;
    }
}
