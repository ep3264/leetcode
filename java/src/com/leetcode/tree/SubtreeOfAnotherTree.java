package com.leetcode.tree;

import static com.leetcode.tree.TreeNode.arrayToTree;

public class SubtreeOfAnotherTree {

    public static void main(String[] args) {

        System.out.println(
                new SubtreeOfAnotherTree().isSubtree(
                        arrayToTree(new Integer[]{3,4,5,1,null,2}),
                        arrayToTree(new Integer[]{3,1,2})
                )
        );
    }

    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if (subRoot == null) return true;
        if (root == null) return false;

        if (isSameTree(root, subRoot)) return true;

        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }

    private boolean isSameTree(TreeNode root, TreeNode subRoot) {
        if (root == null && subRoot == null) return true;
        if (root == null || subRoot == null) return false;

        return root.val == subRoot.val &&
                isSameTree(root.left, subRoot.left)
                && isSameTree(root.right, subRoot.right);
    }
}
