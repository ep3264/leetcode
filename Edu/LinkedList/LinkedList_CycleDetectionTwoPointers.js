import { ListNode } from "./ListNode.js";

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let cur = head;

        let ptr2 = cur?.next;
        while (ptr2) {
            if (cur === ptr2) return true;
            cur = cur.next;
            ptr2 = ptr2.next?.next ?? null;
        }

        return false;

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