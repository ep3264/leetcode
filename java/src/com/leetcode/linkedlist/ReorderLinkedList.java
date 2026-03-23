package com.leetcode.linkedlist;

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
        if (cur == null)
            return head;

        ListNode node = reorderListRec(head, cur.next);
        if (node == null) return null;

        if (node == cur || node.next == cur) {
            cur.next = null;
            return null;
        }

        ListNode temp = node.next;
        node.next = cur;
        cur.next = temp;

        return cur.next;
    }
}
