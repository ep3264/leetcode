import { ListNode, createList } from "./ListNode.js";

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {

        this.reorderListRec(head, head);
        return head;
    }

    reorderListRec(cur, head) {
        if (!cur.next) return [cur, head];

        const ret = this.reorderListRec(cur.next, head);
        if (!ret) return null;

        const [second, firts] = ret;
        [firts.next, second.next] = [second, firts.next];

        if (second.next && second === second.next.next) {
            second.next.next = null;
            return null;
        }

        return [cur, second.next];

    }
}


const head = createList([0, 1, 2, 3, 4, 5, 6]);

new Solution().reorderList(head);

let cur = head;
while (cur) {
    console.log(cur.val)
    cur = cur.next;
}

