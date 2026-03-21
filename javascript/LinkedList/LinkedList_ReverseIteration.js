import { ListNode } from "./ListNode.js";

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let cur = head
        let next = head?.next;

        while (cur) {
            cur.next = prev;
            prev = cur;
            cur = next;
            next = next?.next
        }

        return prev;
    }
}

const head = createList([0, 1, 2, 3]);

let cur = new Solution().reverseList(head);;

while (cur !== null) {
    console.log(cur.val);
    cur = cur.next;
}