class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

/*
 O(n log n) / O(n log n)
A simpler O(n log n) time / O(log n) space alternative would be 
to sort the array in-place first, then do a single linear scan to check for overlaps
 — avoiding the recursive array allocation entirely.
*/
class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if (!intervals.length) return true;
        if (this.mergeSort(intervals, 0, intervals.length - 1)[0] === -1)
            return false;

        return true;
    }

    /**
     * @param {Interval[]} intervals
     * @returns {Interval[]}
     */
    mergeSort(intervals, start, end) {
        if (start == end) return [intervals[start]];

        let mid = Math.floor((start + end) / 2);
        let left = this.mergeSort(intervals, start, mid);
        let right = this.mergeSort(intervals, mid + 1, end);

        if (left[0] === -1) return [-1];
        if (right[0] === -1) return [-1];

        const result = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i].start < right[j].start) {
                if (left[i].end > right[j].start) return [-1];
                result.push(left[i++]);
            }
            else {
                if (right[j].end > left[i].start) return [-1];
                result.push(right[j++])
            }
        }

        while (i < left.length) result.push(left[i++]);
        while (j < right.length) result.push(right[j++]);

        return result;
    }
}

console.log(
    new Solution().canAttendMeetings([new Interval(0, 30), new Interval(35, 40), new Interval(40, 41)])
);
