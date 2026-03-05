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
const root2 = new TreeNode(
    2,
    new TreeNode(
        4
    ),
    new TreeNode(
        5
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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root && !subRoot) return true;

        if (!root || !subRoot) return false;

        let ret = this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
        ret = ret || this.isSameTree(root, subRoot);


        return ret;
    }

    isSameTree(root, subRoot) {
        if (!root && !subRoot) return true;

        if (!root || !subRoot) return false;

        if (root.val == subRoot.val) {
            const left = this.isSameTree(root.left, subRoot.left);
            const right = this.isSameTree(root.right, subRoot.right);

            return left && right;
        }

        return false;
    }
}


const sol = new Solution;

printLevelOrder(root);
printLevelOrder(root2);
console.log(sol.isSubtree(root, root2));