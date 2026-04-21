package com.leetcode.refresh;

import com.leetcode.tree.TreeNode;

import java.util.ArrayDeque;
import java.util.Queue;

public class MaximumDepthOfBinaryTree {

    public static void main(String[] args) {
        System.out.println(
                new MaximumDepthOfBinaryTree().maxDepth(
                        TreeNode.arrayToTree(
                                new Integer[]{1, 2, 3, null, null, 4}
                        )
                )
        );
    }

    public int maxDepth(TreeNode root) {
        if (root == null) return 0;

        Queue<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);
        int counter = 0;
        while (!queue.isEmpty()) {
            int n = queue.size();
            counter++;
            for (int i = 0; i < n; i++) {
                var node = queue.poll();


                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
        }
        return counter;
    }

}
