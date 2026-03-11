class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

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


const solution = new Solution();
solution.reorderList(head);

let cur = head;
while (cur) {
    console.log(cur.val)
    cur = cur.next;
}



function createList(arr) {
    let dummy = new ListNode();
    let current = dummy;

    for (let value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
}