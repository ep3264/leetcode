package com.leetcode.refresh;

import com.leetcode.tree.TreeNode;

import java.util.ArrayDeque;
import java.util.Queue;

public class InvertBinaryTree {
    public static void main(String[] args) {
        System.out.println(
                TreeNode.treeToArray(
                        new InvertBinaryTree().invertTree(
                                TreeNode.arrayToTree(new Integer[]{1, 2, 3, 4, 5, 6, 7})
                        )
                )
        );
    }

    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;

        var queue = new ArrayDeque<TreeNode>();
        queue.addLast(root);
        while (!queue.isEmpty()) {
            int n = queue.size();

            for (int i = 0; i < n;  i++) {
                var node =  queue.pollFirst();
                if (node.left != null)  queue.addLast(node.left);
                if (node.right != null)  queue.addLast(node.right);

                var temp  = node.left;
                node.left = node.right;
                node.right = temp;
            }
        }

        return root;
    }
}
