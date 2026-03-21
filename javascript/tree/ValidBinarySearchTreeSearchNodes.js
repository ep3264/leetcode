import { TreeNode, treeToArray } from "./TreeNode.js";

const root = new TreeNode(
    5,
    new TreeNode(4),
    new TreeNode(6,
        new TreeNode(3),
        new TreeNode(7)
    )
);

const root2 = new TreeNode(
    3,
    new TreeNode(1,
        null,
        new TreeNode(2)

    ),
    new TreeNode(4)
);

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        if (!root) return true;
        return this.isValidBSTRec(root, root.left) && this.isValidBSTRec(root, root.right);
    }

    isValidBSTRec(root, node) {
        if (!node) return true;

        if (!this.findNode(root, node)) return false;

        return this.isValidBSTRec(root, node.left) && this.isValidBSTRec(root, node.right);
    }

    /**
     * @param {TreeNode} root
     * @param {TreeNode} node
     * @return {boolean}
     */
    findNode(root, node) {
        if (!root) return false;

        if (root == node) return true;

        if (root.val > node.val) return this.findNode(root.left, node);
        if (root.val < node.val) return this.findNode(root.right, node);

        return false;
    }
}

console.log(treeToArray(
    root
));

console.log(
    new Solution().isValidBST(root)
);

console.log(
    new Solution().isValidBST(root2)
);