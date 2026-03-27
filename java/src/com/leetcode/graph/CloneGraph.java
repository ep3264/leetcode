package com.leetcode.graph;
import java.util.HashMap;

import static com.leetcode.graph.Node.buildGraph;

public class CloneGraph {
    public static void main(String[] args) {
        Node cloned = new CloneGraph().cloneGraph(
                buildGraph(
                     new int[][] {{2}, {1, 3}, {2}}
                )
        );

        System.out.println(
               cloned
        );
    }

    public Node cloneGraph(Node node) {
        if (node == null) return null;

        var map = new HashMap<Integer, Node>();
        buildMap(node, map);

        Node[] nodes = new Node[map.entrySet().size() + 1];
        for (var entry : map.entrySet()) {
            nodes[entry.getKey()] = new Node(entry.getKey());
        }
        for (var curNode : map.values()) {
            var cloned = nodes[curNode.val];
           for (var neighbor : curNode.neighbors) {
               cloned.neighbors.add(nodes[neighbor.val]);
           }
        }

        return nodes[1];
    }

    private void buildMap(Node node, HashMap<Integer, Node> map) {
        map.put(node.val, node);
        for (var neighbor : node.neighbors) {
            if (!map.containsKey(neighbor.val)) {
                map.put(neighbor.val, neighbor);
                buildMap(neighbor, map);
            }
        }
    }
}