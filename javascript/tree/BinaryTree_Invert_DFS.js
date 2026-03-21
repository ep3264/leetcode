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

        const node = root.left;
        root.left = root.right;
        root.right = node;

        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }

}

printLevelOrder(
    new Solution().invertTree(root)
);

