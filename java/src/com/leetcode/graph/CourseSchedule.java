package com.leetcode.graph;

import java.util.HashSet;
import java.util.Set;

public class CourseSchedule {

    public static void main(String[] args) {
        System.out.println(
                new CourseSchedule().canFinish(2, new int[][]{
                        {0, 1}
                })
        );
        System.out.println(
            new CourseSchedule().canFinish(5, new int[][]{
                    {1, 4}, {2, 4}, {3, 1}, {3, 2}, {2, 3}
            })
        );
        System.out.println(
                new CourseSchedule().canFinish(6, new int[][]{
                        {1,0}, {2,0}, {0,3}, {0,4}, {3,5}, {4,5}
                })
        );


    }

    public boolean canFinish(int numCourses, int[][] prerequisites) {
        Set<Integer> completed = new HashSet<>();
        for (int i = 0; i < numCourses; i++) {
           if(!dfs(i, new HashSet<>(), completed, prerequisites)) return false;
        }

        return true;
    }

    public boolean dfs(int course, Set<Integer> visited, Set<Integer> completed, int[][] prerequisites) {
        if (visited.contains(course)) return false;
        if (completed.contains(course)) return true;

        visited.add(course);
        for (int j = 0; j < prerequisites.length; j++) {

            if (prerequisites[j][0] == course) {
                if (!dfs(prerequisites[j][1], visited, completed, prerequisites)) {
                    return false;
                }
            }
        }

        visited.remove(course);
        completed.add(course);
        return true;
    }
}
