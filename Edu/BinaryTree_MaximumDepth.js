class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

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
        new TreeNode(7,
            new TreeNode(8),
            null)
    )
);

function printLevelOrder(root) {
    if (!root) return;

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}




class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {

        return this.maxDepthRec(root, 0);
    }

    maxDepthRec(root, d) {
        if (!root) return d;

        const l = this.maxDepthRec(root.left, d + 1);
        const r = this.maxDepthRec(root.right, d + 1);

        return l > r ? l : r;
    }
}

const sol = new Solution;

printLevelOrder(root);
console.log(sol.maxDepth(root));