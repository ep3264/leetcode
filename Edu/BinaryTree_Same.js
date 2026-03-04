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

const sol = new Solution;

printLevelOrder(root);
printLevelOrder(root2);
console.log(sol.isSameTree(root, root2));