package com.leetcode.graph;

import java.util.HashMap;

import static com.leetcode.graph.Node.buildGraph;

public class CloneGraph {
    public static void main(String[] args) {
        var graph = new int[][]{{2}, {1, 3}, {2}};
        Node cloned = new CloneGraph().cloneGraph(
                buildGraph(
                       graph
                )
        );

        System.out.println(
                cloned
        );
    }

    public Node cloneGraph(Node node) {
        var clonedByNode = new HashMap<Integer, Node>();

        return dfs(node, clonedByNode);
    }

    public Node cloneGraphBFS(Node node) {
        return null;
    }

    private Node dfs(Node node, HashMap<Integer, Node> clonedByMap) {
        if (node == null) return null;

        if (clonedByMap.containsKey(node.val)) {
            return clonedByMap.get(node.val);
        }

        var cloned = new Node(node.val);
        clonedByMap.put(node.val, cloned);

        for (var neighbor : node.neighbors) {
            cloned.neighbors.add(dfs(neighbor, clonedByMap));
        }

        return cloned;
    }
}