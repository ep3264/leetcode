class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length == 1) return intervals;

        intervals.sort((a, b) => a[0] - b[0]);
        const result = [];
        let i = 0;
        for (; i < intervals.length - 1; i++) {

            let cur = intervals[i];
            let next = intervals[i + 1];
            if (cur[1] < next[0]) {
                result.push(cur);
                continue;
            }
            const start = cur[0];
            let end = cur[1];
            while (i < intervals.length - 1 && end >= intervals[i + 1][0]) {
                i++;
                end = Math.max(end, intervals[i][1])
            }

            result.push([start, end]);
        }

        let j = i;
        while (j < intervals.length) {
            result.push(intervals[j]);
            j++;
        }

        return result;

    }
}

const intervals = [[1, 3], [1, 5], [6, 7]];

console.log(
    new Solution().merge(intervals)
);

console.log(
    new Solution().merge([[1, 3], [1, 5]])
);

console.log(
    new Solution().merge([[1, 9], [1, 4], [3, 10]])
);