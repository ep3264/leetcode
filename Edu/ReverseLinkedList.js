/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

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
const head = new ListNode(
    0,
    new ListNode(
        1,
        new ListNode(
            2,
            new ListNode(3)
        )
    )
);

const sol = new Solution;

const reversed = sol.reverseList(head);

let cur = reversed;

while (cur !== null) {
    console.log(cur.val);
    cur = cur.next;
}