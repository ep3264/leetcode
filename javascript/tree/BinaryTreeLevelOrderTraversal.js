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
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = [];
        if (!root) return result;

        const queue = [];

        queue.push(root);

        while (queue.length) {

            const n = queue.length;
            const levelResult = [];
            for (let i = 0; i < n; i++) {


                const node = queue.shift();
                levelResult.push(node.val);

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            result.push(levelResult);
        }

        return result;
    }
}

console.log(new Solution().levelOrder(root));