
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
        new TreeNode(7)
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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null;

        const stack = [root];

        while (stack.length) {
            const node = stack.pop();

            [node.left, node.right] = [node.right, node.left];

            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }

        return root;
    }

}

const sol = new Solution;

printLevelOrder(sol.invertTree(root));

