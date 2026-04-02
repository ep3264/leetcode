package com.leetcode;

import java.util.Arrays;

public class RotateImage {

    public static void main(String[] args) {
        var matrix = new int[][]{
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };

        for (int i = 0; i < matrix.length; i++)
            System.out.println(
                    Arrays.toString(matrix[i])
            );

        System.out.println();
        new RotateImage().rotate(matrix);

        for (int i = 0; i < matrix.length; i++)
            System.out.println(
                    Arrays.toString(matrix[i])
            );
    }

    public void rotate(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = i; j < matrix[i].length; j++) {
                int temp =  matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        for (int i = 0; i < matrix.length; i++) {
            int left = 0;
            int right = matrix[i].length - 1;
            while (left < right) {
                int temp = matrix[i][left];
                matrix[i][left] = matrix[i][right];
                matrix[i][right] = temp;

                left++;
                right--;
            }
        }
    }
}
