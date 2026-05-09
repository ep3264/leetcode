package com.leetcode.refresh;

import com.leetcode.tree.TreeNode;

import static com.leetcode.tree.TreeNode.arrayToTree;

public class LowestCommonAncestorBSTIterative {

    public static void main(String[] args) {
        System.out.println(
                new LowestCommonAncestorBSTIterative().lowestCommonAncestor(
                        arrayToTree(new Integer[]{5, 3, 8, 1, 4, 7, 9, null, 2}),
                        new TreeNode(1),
                        new TreeNode(4)
                ).val
        );
    }

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        while (root != null) {
            if (root.val > p.val && root.val > q.val) root = root.left;
            else if (root.val < p.val && root.val < q.val) root = root.right;
            else  return root;
        }

        return null;
    }
}
