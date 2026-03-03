class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) {
            return list2;
        }

        if (!list2) {
            return list1;
        }

        if (list1.val < list2.val) {
            list1.next = this.mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = this.mergeTwoLists(list2.next, list1);
            return list2;
        }
    }
}


let list1 = createList([1, 2, 4]);
let list2 = createList([1, 3, 4]);

const solution = new Solution();
const head = solution.mergeTwoLists(list1, list2);

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