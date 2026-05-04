package com.leetcode.graph;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }

    public static Node buildGraph(int[][] adjList) {
        if (adjList == null || adjList.length == 0) return null;

        // Step 1: Create all nodes
        Node[] nodes = new Node[adjList.length + 1]; // 1-indexed
        for (int i = 1; i <= adjList.length; i++) {
            nodes[i] = new Node(i);
        }

        // Step 2: Wire up neighbors
        for (int i = 0; i < adjList.length; i++) {
            for (int neighborVal : adjList[i]) {
                nodes[i + 1].neighbors.add(nodes[neighborVal]);
            }
        }

        return nodes[1]; // return the first node
    }

    @Override
    public String toString() {
        return "[" + neighbors.stream().map(n -> n.val + "").collect(Collectors.joining(",")) + "]";
    }
}