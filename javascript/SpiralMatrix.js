class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        if (matrix.length === 0) return [];

        return this.iterate(matrix, 0, 0, matrix.length, matrix[0].length, []);

    }

    iterate(matrix, i, j, n, m, res) {
        if (i >= n || j >= m) return res;


        let start = i;
        while (j < m) {
            res.push(matrix[i][j++]);

        }
        j--;
        i++;

        if (i == n) return res;
        while (i < n) {
            res.push(matrix[i++][j]);

        }
        i--;

        if (j === start) return res;
        while (j > start) {
            j--;
            res.push(matrix[i][j]);
        }

        while (i > (start + 1)) {
            i--;
            res.push(matrix[i][j]);
        }

        return this.iterate(matrix, start + 1, start + 1, n - 1, m - 1, res);
    }
}

/*
console.log(
    new Solution().spiralOrder(
        [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]
    )
);
*/
console.log(
    new Solution().spiralOrder(
        [[7], [9], [6]]
    )
);

console.log(
    new Solution().spiralOrder(
        [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
    )
)


