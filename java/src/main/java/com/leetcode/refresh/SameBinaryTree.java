package com.leetcode.refresh;

import com.leetcode.tree.TreeNode;

import java.util.ArrayDeque;
import java.util.Queue;

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

        Queue<TreeNode> queue = new ArrayDeque<>();
        queue.offer(p);
        queue.offer(q);

        while (!queue.isEmpty()) {
            p = queue.poll();
            q = queue.poll();

            if (p.val != q.val) return false;

            if (p.left != null && q.left != null) {
                queue.offer(p.left);
                queue.offer(q.left);
            } else if (!(p.left == null && q.left == null)) return false;

            if (p.right != null && q.right != null) {
                queue.offer(p.right);
                queue.offer(q.right);
            } else if (!(p.right == null && q.right == null)) return false;

        }

        return true;
    }
}
