class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
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


console.log(new Solution().lowestCommonAncestor(root, new TreeNode(2), new TreeNode(4)).val); // 2
console.log(new Solution().lowestCommonAncestor(root2, new TreeNode(2), new TreeNode(4))); // 3