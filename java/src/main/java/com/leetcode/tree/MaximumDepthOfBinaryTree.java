package com.leetcode.tree;

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

        var left = maxDepth(root.left);
        var right = maxDepth(root.right);

        return Math.max(left, right) + 1;
    }

}
