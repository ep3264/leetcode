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
        return this.isValidBST_DFS(root, -Infinity, Infinity);
    }

    isValidBST_DFS(root, min, max) {
        if (!root) return true;

        return root.val > min && root.val < max && this.isValidBST_DFS(root.left, min, root.val)
            && this.isValidBST_DFS(root.right, root.val, max);
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