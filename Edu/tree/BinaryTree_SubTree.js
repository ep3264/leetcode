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

const root2 = new TreeNode(
    2,
    new TreeNode(
        4
    ),
    new TreeNode(
        5
    )
);

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) return true;

        if (!root) return false;

        return this.isSameTree(root, subRoot)
            || this.isSubtree(root.left, subRoot)
            || this.isSubtree(root.right, subRoot);
    }

    isSameTree(root, subRoot) {
        if (!root && !subRoot) return true;

        if (!root || !subRoot) return false;

        if (root.val === subRoot.val) {
            const left = this.isSameTree(root.left, subRoot.left);
            const right = this.isSameTree(root.right, subRoot.right);

            return left && right;
        }

        return false;
    }
}

printLevelOrder(root);
printLevelOrder(root2);
console.log(new Solution().isSubtree(root, root2));