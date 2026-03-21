package com.leetcode.tree;

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
        if (root == null) return  null;

        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;

        if (root.left != null) invertTree(root.left);
        if (root.right != null) invertTree(root.right);

        return root;
    }
}
