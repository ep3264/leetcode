
/**
 * Definition for singly-linked list.
 */
export class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


export function createList(arr) {
    let dummy = new ListNode();
    let current = dummy;

    for (let value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
}