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
        if (!root) true;

        return this.isValidBSTRec(root.left, -Number.MAX_VALUE, root.val)
            && this.isValidBSTRec(root.right, root.val, Number.MAX_VALUE);
    }

    isValidBSTRec(root, min, max) {
        if (!root) return true;

        return root.val > min && root.val < max && this.isValidBSTRec(root.left, min, root.val)
            && this.isValidBSTRec(root.right, root.val, max);
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