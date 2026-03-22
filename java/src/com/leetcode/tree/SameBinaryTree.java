package com.leetcode.tree;

public class SameBinaryTree {

    public static void main(String[] args) {

        System.out.println(
                new SameBinaryTree().isSameTree(
                        TreeNode.arrayToTree(
                                new Integer[]{1, 2, 3}
                        ),
                        TreeNode.arrayToTree(
                                new Integer[]{1, 2, 3}
                        )
                )
        );
    }

    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;

        return p.val == q.val
                && isSameTree(p.left, q.left)
                && isSameTree(p.right, q.right);
    }
}
