import { TreeNode } from "./TreeNode.js";

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;

        const nNodes = [];
        let depth = 0;
        const queue = [root];

        function inc(n) {
            nNodes[n] = (nNodes[n] ?? 0) + 1;
        }
        inc(depth);

        while (queue.length) {
            const node = queue.shift();
            nNodes[depth]--;

            if (node.left) {
                queue.push(node.left);
                inc(depth + 1);
            }
            if (node.right) {
                queue.push(node.right);
                inc(depth + 1);
            }

            if (nNodes[depth] === 0) {
                depth++;
            }
        }

        return depth;
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
            null
        )
    )
);

console.log(
    new Solution().maxDepth(root)
);