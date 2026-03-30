package com.leetcode.graph;

import java.util.*;
import java.util.List;
import java.util.stream.Collectors;


public class PacificAtlanticWaterFlowReverse {

    public static void main(String[] args) {
        System.out.println(
                new PacificAtlanticWaterFlowReverse().pacificAtlantic(new int[][]{
                        {1, 2, 2, 3, 5},
                        {3, 2, 3, 4, 4},
                        {2, 4, 5, 3, 1},
                        {6, 7, 1, 4, 5},
                        {5, 1, 1, 2, 4}
                })
        );
        System.out.println(
                new PacificAtlanticWaterFlowReverse().pacificAtlantic(new int[][]{
                        {4, 2, 7, 3, 4},
                        {7, 4, 6, 4, 7},
                        {6, 3, 5, 3, 6}
                })
        );
        System.out.println(
                new PacificAtlanticWaterFlowReverse().pacificAtlantic(new int[][]{{1}, {1}})
        );
    }

    private record Point(int x, int y) {}

    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        if (heights == null || heights.length == 0) return Collections.emptyList();
        Set<Point> pacific = new HashSet<>();
        Set<Point> atlantic = new HashSet<>();

        for (int i = 0; i < heights.length; i++) {
            dfs(i, 0, heights, pacific);
            dfs(i, heights[0].length - 1, heights, atlantic);
        }
        for (int j = 0; j < heights[0].length; j++) {
            dfs(0, j, heights, pacific);
            dfs(heights.length - 1, j, heights, atlantic);
        }

        return pacific.stream()
                .filter(atlantic::contains)
                .map(p -> List.of(p.x(), p.y()))
                .toList();
    }

    private void dfs(int i, int j, int[][] heights, Set<Point> visited) {
        if (!visited.add(new Point(i, j))) return;

        if (i - 1 >= 0 && heights[i][j] <= heights[i - 1][j])
            dfs(i - 1, j, heights, visited);
        if ((j - 1 >= 0) && heights[i][j] <= heights[i][j - 1])
            dfs(i, j - 1, heights, visited);
        if (i + 1 < heights.length && heights[i][j] <= heights[i + 1][j])
            dfs(i + 1, j, heights, visited);
        if (j + 1 < heights[i].length && heights[i][j] <= heights[i][j + 1])
            dfs(i, j + 1, heights, visited);
    }
}
