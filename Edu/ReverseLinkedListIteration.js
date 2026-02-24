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
        let prev = null;
        let cur = head
        let next = head.next;

        while (cur) {
            cur.next = prev;
            prev = cur;
            cur = next;
            next = next?.next
        }

        return prev;
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