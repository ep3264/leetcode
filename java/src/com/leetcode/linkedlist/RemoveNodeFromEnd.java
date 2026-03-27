package com.leetcode.linkedlist;

import static com.leetcode.linkedlist.ListNode.toLinkedList;
import static com.leetcode.linkedlist.ListNode.toList;

public class RemoveNodeFromEnd {
    public static void main(String[] args) {

        System.out.println(
                toList(
                        new RemoveNodeFromEnd().removeNthFromEnd(
                                toLinkedList(new Integer[]{1, 2}), 2
                        )
                )
        );
    }

    public ListNode removeNthFromEnd(ListNode head, int n) {
        if (head == null) return null;

        var dummy = new ListNode(-1, head);
        removeNthFromEndRec(dummy, n);

        return dummy.next;
    }

    private int removeNthFromEndRec(ListNode head, int n) {
        if (head == null) return n;

        var counter = removeNthFromEndRec(head.next, n);
        if (counter == 0) {
            ListNode node = null;
            if (head.next != null) {
                node = head.next.next;
            }
            head.next = node;
        }

        return counter - 1;
    }
}
