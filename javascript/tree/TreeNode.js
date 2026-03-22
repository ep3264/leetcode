
export class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export function treeToArray(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();

        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // Trim trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

export function fromArray(arr) {
    if (!arr || arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift();

        if (i < arr.length) {
            if (arr[i] !== null) {
                node.left = new TreeNode(arr[i]);
                queue.push(node.left);
            }
            i++;
        }

        if (i < arr.length) {
            if (arr[i] !== null) {
                node.right = new TreeNode(arr[i]);
                queue.push(node.right);
            }
            i++;
        }
    }

    return root;
}

export function printLevelOrder(root) {
    if (!root) return;

    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelVals = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            levelVals.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        console.log(levelVals.join(" "));
    }
}


export function printTree(root) {
    if (!root) return;

    const levels = [];
    let queue = [root];

    while (queue.length > 0) {
        const nextQueue = [];
        const levelVals = [];

        for (const node of queue) {
            if (node === null) {
                levelVals.push("null");
                nextQueue.push(null, null);
            } else {
                levelVals.push(String(node.val));
                nextQueue.push(node.left ?? null, node.right ?? null);
            }
        }

        levels.push(levelVals);

        // Stop if the next level is all nulls
        if (nextQueue.every(n => n === null)) break;
        queue = nextQueue;
    }

    const width = Math.pow(2, levels.length) * 3;

    for (let i = 0; i < levels.length; i++) {
        const gap = " ".repeat(Math.floor(width / Math.pow(2, i + 1)));
        console.log(gap + levels[i].join(gap + gap));
    }
}