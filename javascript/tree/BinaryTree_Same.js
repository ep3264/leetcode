import { TreeNode, printLevelOrder } from "./TreeNode.js";

const root = new TreeNode(
    1,
    new TreeNode(
        2
    ),
    new TreeNode(
        3
    )
);

const root2 = new TreeNode(
    1,
    new TreeNode(
        3
    ),
    new TreeNode(
        2
    )
);

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) {
            return true;
        }

        if (!p || !q) {
            return false;
        }

        const ret = (p.val === q.val) &&
            this.isSameTree(p.left, q.left)
            && this.isSameTree(p.right, q.right);

        return ret;
    }
}

printLevelOrder(root);
printLevelOrder(root2);

console.log(new Solution().isSameTree(root, root2));