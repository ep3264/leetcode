package com.leetcode.refresh;

import com.leetcode.tree.TreeNode;

import static com.leetcode.tree.TreeNode.arrayToTree;

public class LowestCommonAncestorBST {

    public static void main(String[] args) {
        System.out.println(
                new LowestCommonAncestorBST().lowestCommonAncestor(
                        arrayToTree(new Integer[]{5, 3, 8, 1, 4, 7, 9, null, 2}),
                        new TreeNode(1),
                        new TreeNode(4)
                ).val
        );
    }

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root.val <= Math.max(p.val, q.val) && root.val >= Math.min(p.val, q.val))
            return root;

        if (root.val > Math.max(p.val, q.val))
            return lowestCommonAncestor(root.left, p, q);

        if (root.val < Math.min(p.val, q.val))
            return lowestCommonAncestor(root.right, p, q);

        return null;
    }
}
