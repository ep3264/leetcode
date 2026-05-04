package com.leetcode.tree;

import static com.leetcode.tree.TreeNode.arrayToTree;

public class ValidBinarySearchTree {

    public static void main(String[] args) {
        System.out.println(
                new ValidBinarySearchTree().isValidBST(
                    arrayToTree(new Integer[] {2,1,3})
                )
        );
    }

    public boolean isValidBST(TreeNode root) {
        return isValidBST(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    private boolean isValidBST(TreeNode root, long min, long max) {
        if (root == null) return true;

        return root.val > min && root.val < max
                && isValidBST(root.left, min, root.val)
                && isValidBST(root.right, root.val, max);
    }
 }
