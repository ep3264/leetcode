package com.leetcode.refresh;

import com.leetcode.linkedlist.ListNode;

import static com.leetcode.linkedlist.ListNode.printList;
import static com.leetcode.linkedlist.ListNode.toLinkedList;

public class ReorderLinkedList {

    public static void main(String[] args) {
        var head = toLinkedList(new Integer[]{2, 4, 6, 8});
        var head2 = toLinkedList(new Integer[]{0, 1, 2, 3, 4, 5, 6});
        new ReorderLinkedList().reorderList(
                head
        );
        new ReorderLinkedList().reorderList(
                head2
        );
        printList(head);
        printList(head2);
    }

    public void reorderList(ListNode head) {
        if (head == null)
            return;

        reorderListRec(head, head.next);
    }

    public ListNode reorderListRec(ListNode head, ListNode cur) {
        if (cur == null) return head;

        var ret = reorderListRec(head, cur.next);
        if (ret == null) return null;
        var next = ret.next;

        if (ret == cur || ret.next == cur) {
            cur.next = null;
            return  null;
        }

        ret.next = cur;
        cur.next = next;

        return next;
    }
}
