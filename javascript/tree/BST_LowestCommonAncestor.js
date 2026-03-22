import { TreeNode, fromArray, treeToArray } from "./TreeNode.js";

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root || !p || !q) return null;


        if (Math.max(p.val, q.val) < root.val) {
            return this.lowestCommonAncestor(root.left, p, q);
        }
        if (Math.min(p.val, q.val) > root.val) {
            return this.lowestCommonAncestor(root.right, p, q);
        }
        return root;
    }
}


const root = fromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);

console.log(
    new Solution()
        .lowestCommonAncestor(root, new TreeNode(2), new TreeNode(4)).val
); // 2

console.log(
    new Solution()
        .lowestCommonAncestor(
            fromArray([3, 1, 4, null, 2]), new TreeNode(2), new TreeNode(4)
        )
); // 3