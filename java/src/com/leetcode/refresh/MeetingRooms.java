package com.leetcode.refresh;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;


public class MeetingRooms {

    public static void main(String[] args) {
        var result = new MeetingRooms().canAttendMeetings(
                new ArrayList<>(
                        List.of(new Interval(0, 30), new Interval(15, 20), new Interval(5, 10))
                )
        );
        System.out.println(result);
    }

    public boolean canAttendMeetings(List<Interval> intervals) {
        if (intervals.size() <= 1) return  true;
        intervals.sort(Comparator.comparing(a -> a.start));

        for (int i = 0; i < intervals.size() - 1; i++) {
            if (intervals.get(i).end > intervals.get(i + 1).start) return false;
        }

        return true;
    }

    private static class Interval {
        public int start, end;

        public Interval(int start, int end) {
            this.start = start;
            this.end = end;
        }
    }
}

