package com.leetcode;

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {

    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    public static final TreeNode ROOT =
            new TreeNode(1,
                    new TreeNode(2,
                            new TreeNode(4),
                            new TreeNode(5)
                    ),
                    new TreeNode(3,
                            new TreeNode(6),
                            new TreeNode(7)
                    )
            );
}


