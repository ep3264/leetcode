import { TreeNode } from "./TreeNode.js";


const root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(
        3,
        new TreeNode(6),
        new TreeNode(7)
    )
);


class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null;

        const queue = [root];

        while (queue.length) {
            const node = queue.shift();

            [node.left, node.right] = [node.right, node.left];

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return root;
    }

}

const sol = new Solution;

printLevelOrder(sol.invertTree(root));

