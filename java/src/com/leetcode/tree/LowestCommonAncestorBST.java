package com.leetcode.tree;

import static com.leetcode.tree.TreeNode.arrayToTree;

public class LowestCommonAncestorBST {

    public static void main(String[] args) {
        System.out.println(
                new LowestCommonAncestorBST().lowestCommonAncestor(
                        arrayToTree(new Integer[]{5, 3, 8, 1, 4, 7, 9, null, 2}),
                        new TreeNode(3),
                        new TreeNode(8)
                ).val
        );
    }

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) return null;

        if (root.val <= Math.max(p.val, q.val) && root.val >= Math.min(p.val, q.val))
            return root;
        else if (root.val >= Math.min(p.val, q.val))
            return lowestCommonAncestor(root.left, p, q);
        else
            return lowestCommonAncestor(root.right, p, q);

    }
}
