import { ListNode } from "./ListNode.js";

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const map = new Map();
        let cur = head;
        let index = 0;
        while (cur != null) {

            if (map.has(cur)) {
                return map.get(cur);
            }

            map.set(cur, index);
            index++;
            cur = cur.next;
        }

        return -1;
    }
}

const tail = new ListNode(3);
const head = new ListNode(
    0,
    new ListNode(
        1,
        new ListNode(
            2,
            tail
        )
    )
);
tail.next = head;

console.log(
    new Solution().hasCycle(head)
);