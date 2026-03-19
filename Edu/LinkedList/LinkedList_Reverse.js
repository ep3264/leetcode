import { ListNode, createList } from "./ListNode.js";

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (head === null)
            return head;
        const [next, top] = this.reverseListRec(head);

        next.next = null;


        return top;
    }

    reverseListRec(head) {
        if (head.next == null) {
            return [head, head];
        }

        const [next, top] = this.reverseListRec(head.next);
        next.next = head;
        return [head, top];
    }
}

// Build list: 0 -> 1 -> 2 -> 3 -> null
const head = createList([0, 1, 2, 3]);

let cur = new Solution().reverseList(head);

while (cur !== null) {
    console.log(cur.val);
    cur = cur.next;
}