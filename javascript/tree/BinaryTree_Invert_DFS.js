import { TreeNode, fromArray, printLevelOrder, printTree, treeToArray } from "./TreeNode.js";

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

const root = fromArray([
    1, 2, 3, 4,
    5, 6, 7
]);

printTree(root);

printTree(
    new Solution().invertTree(root)
);


