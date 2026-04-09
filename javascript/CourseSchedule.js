class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const completed = new Set();
        for (let i = 0; i < prerequisites.length; i++) {
            if (!this.dfs(prerequisites[i][1], new Set(), completed, prerequisites)) return false;
        }

        return true;
    }

    dfs(i, visited, completed, prerequisites) {
        if (completed.has(i)) return true;
        if (visited.has(i)) return false;
        visited.add(i);
        for (let j = 0; j < prerequisites.length; j++) {
            if (prerequisites[j][0] === i) {
                if (!this.dfs(prerequisites[j][1], visited, completed, prerequisites)) return false;
            }
        }

        completed.add(i);

        return true;
    }
}
/*

console.log(
    new Solution().canFinish(
        4, [[2, 0], [1, 0], [3, 1], [3, 2], [1, 3]]

    )
);

*/
console.log(
    new Solution().canFinish(
        5, [[1, 4], [2, 4], [3, 1], [3, 2]]

    )
);
