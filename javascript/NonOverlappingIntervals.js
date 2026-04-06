class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (intervals.length <= 1) return 0;

        intervals.sort((a, b) => {
            let ret = a[0] - b[0];
            if (ret === 0) return b[1] - a[1];
            return ret;
        }
        );
        let counter = 0;

        for (let i = 0, j = 1; i < intervals.length - 1 && j < intervals.length; i++, j++) {

            if (intervals[i][1] <= intervals[j][0]) {
                continue;
            }
            if (intervals[i][0] === intervals[j][0]) {
                counter++;
                continue;
            }
            if (intervals[i][1] > intervals[j][1]) {
                counter++;
                continue;
            }

            for (; j < intervals.length && intervals[i][1] > intervals[j][0] && intervals[i][1] <= intervals[j][1];
                j++, counter++);

            if (j < intervals.length && intervals[i][1] > intervals[j][1]) counter++;

            i = j - 1;

        }

        return counter;
    }
}

console.log(
    new Solution()
        .eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])
);

console.log(
    new Solution()
        .eraseOverlapIntervals([[0, 100], [1, 11], [2, 12], [11, 22]])
);

console.log(
    new Solution()
        .eraseOverlapIntervals([[0, 2], [1, 3], [2, 4], [3, 5], [4, 6]])
);

console.log(
    new Solution()
        .eraseOverlapIntervals([
            [-52, 31], [-73, -26], [82, 97], [-65, -11], [-62, -49], [95, 99], [58, 95], [-31, 49], [66, 98], [-63, 2], [30, 47], [-40, -26]]
        )
);