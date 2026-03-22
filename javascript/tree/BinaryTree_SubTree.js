import { fromArray, TreeNode } from "./TreeNode.js";

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

const root = fromArray([
    1, 2, 3,
    4, 5, 6, 7
]);

console.log(
    new Solution().isSubtree(root, fromArray([2, 4, 5]))
);