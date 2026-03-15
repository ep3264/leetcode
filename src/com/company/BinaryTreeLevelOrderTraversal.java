package com.company;


import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class BinaryTreeLevelOrderTraversal {

    public static void main(String[] args) {
        var ret = new Solution().levelOrder(TreeNode.ROOT);
        System.out.println(ret);
    }
}

class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        var result = new LinkedList<List<Integer>>();
        if (root == null)
            return result;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            int n = queue.size();

            List<Integer> level = new ArrayList<>();
            result.add(level);
            for (int i = 0; i < n; i++) {
                TreeNode node = queue.poll();
                level.add(node.val);
                if (node.left != null) queue.add(node.left);
                if (node.right != null) queue.add(node.right);
            }

        }

        return result;
    }
}
