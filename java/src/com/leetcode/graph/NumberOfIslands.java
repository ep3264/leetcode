package com.leetcode.graph;

public class NumberOfIslands {

    public static void main(String[] args) {
        char[][] grid = {
                {'0','1','0','1','0'},
                {'0','1','0','1','0'},
                {'1','1','0','0','0'},
                {'0','0','0','0','1'}
        };

        System.out.println(
                new NumberOfIslands().numIslands(
                        grid
                )
        );
    }

    public int numIslands(char[][] grid) {
        int n = grid.length;
        int groupNum = 0;
        for (int i = 0; i < n; i++) {
           int m = grid[0].length;
           for (int j = 0; j < m; j++) {
                if (grid[i][j] == '1'){
                    groupNum++;
                    dfs(grid, i, j);
                }

           }

        }
        return groupNum;
    }

    private void dfs(char[][] grid, int i, int j) {

        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0')
        {
            return;
        }

        grid[i][j] = '0';

        dfs(grid, i, j + 1);
        dfs(grid, i + 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i - 1, j);
    }
}
