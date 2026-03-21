import { TreeNode, treeToArray } from "./TreeNode.js";

const root = new TreeNode(
    5,
    new TreeNode(4),
    new TreeNode(6,
        new TreeNode(3),
        new TreeNode(7)
    )
);

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.isSameTree(root, this.buildTree(root));
    }

    buildTree(root) {
        if (!root) return null;
        const newRoot = new TreeNode(root.val);
        this.addNodes(root.left, newRoot);
        this.addNodes(root.right, newRoot);
        return newRoot;
    }

    addNodes(src, dst) {
        if (!src) return;
        this.addNode(dst, src.val);
        this.addNodes(src.left, dst);
        this.addNodes(src.right, dst);
    }

    addNode(dst, val) {
        if (val < dst.val) {
            if (!dst.left) dst.left = new TreeNode(val);
            else this.addNode(dst.left, val);
        } else if (val > dst.val) {
            if (!dst.right) dst.right = new TreeNode(val);
            else this.addNode(dst.right, val);
        }
    }

    isSameTree(a, b) {
        if (!a && !b) return true;
        if (!a || !b) return false;
        if (a.val !== b.val) return false;

        return this.isSameTree(a.left, b.left) &&
            this.isSameTree(a.right, b.right);
    }

}

console.log(treeToArray(
    root
));
console.log(treeToArray(
    new Solution().buildTree(root)
));
console.log(
    new Solution().isValidBST(root)
);