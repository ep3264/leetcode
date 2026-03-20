
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}


class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i].start < intervals[i - 1].end) {
                return false;
            }
        }
        return true;
    }
}


const s = new Solution;
console.log(s.canAttendMeetings([new Interval(0, 30), new Interval(35, 40), new Interval(40, 41)]))
