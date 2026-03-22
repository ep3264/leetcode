import { TreeNode } from "./TreeNode.js";

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        return this.recur(root, p, q)[0];
    }

    recur(root, p, q) {

        if (!root) return [null, false];

        const [left, lflag] = this.recur(root.left, p, q);
        const [right, rflag] = this.recur(root.right, p, q);

        if (lflag) return [left, true];
        if (rflag) return [right, true];

        if (left !== null && right !== null) return [root, true];

        if (left !== null || right !== null) {
            if (root.val === p.val || root.val === q.val) return [root, true];
            else return left !== null ? [left, false] : [right, false];
        }

        if (root.val === p.val) return [root, false];
        if (root.val === q.val) return [root, false];

        return [null, false];
    }
}


const root = new TreeNode(
    6,
    new TreeNode(
        2,
        new TreeNode(0),
        new TreeNode(4,
            new TreeNode(3),
            new TreeNode(5)
        )
    ),
    new TreeNode(
        8,
        new TreeNode(7),
        new TreeNode(9)
    )
);

console.log(new Solution().lowestCommonAncestor(root, new TreeNode(2), new TreeNode(4)).val);
console.log(
    new Solution()
        .lowestCommonAncestor(
            fromArray([3, 1, 4, null, 2]), new TreeNode(2), new TreeNode(4)
        )
);