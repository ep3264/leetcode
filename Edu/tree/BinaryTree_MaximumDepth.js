import { TreeNode, printLevelOrder } from "./TreeNode.js";

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
        new TreeNode(7,
            new TreeNode(8),
            null)
    )
);

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {

        return this.maxDepthRec(root, 0);
    }

    maxDepthRec(root, d) {
        if (!root) return d;

        const l = this.maxDepthRec(root.left, d + 1);
        const r = this.maxDepthRec(root.right, d + 1);

        return l > r ? l : r;
    }
}

printLevelOrder(root);
console.log(new Solution().maxDepth(root));