package com.leetcode.tree;

import static com.leetcode.tree.TreeNode.arrayToTree;

public class KthSmallestIntegerBST {
    public static void main(String[] args) {
        System.out.println(
                new KthSmallestIntegerBST().kthSmallest(
                        arrayToTree(new Integer[]{4, 3, 5, 2, null}), 4
                )
        );

        System.out.println(
                new KthSmallestIntegerBST().kthSmallest(
                        arrayToTree(new Integer[]{2, 1, 3}), 2
                )
        );
    }

    public int kthSmallest(TreeNode root, int k) {
        return kthSmallestRec(root, k)[1];
    }

    public int[] kthSmallestRec(TreeNode root, int k) {
        if (root == null) return new int[]{k, -1};

        var left = kthSmallestRec(root.left, k);
        if (left[0] == -1) return left;
        if (left[0] == 1) {
            return new int[]{-1, root.val};
        }

        var right = kthSmallestRec(root.right, left[0] - 1);
        if (right[0] == -1) return right;

        return new int[]{right[0], -1};
    }
}
