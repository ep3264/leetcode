package com.leetcode.refresh;

import com.leetcode.linkedlist.ListNode;

public class ReverseLinkedList {

    public static void main(String[] args) {
        ListNode.printList(
                new ReverseLinkedList().reverseList(ListNode.HEAD)
        );

    }

    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode prev = head;
        ListNode cur = head.next;
        ListNode next = null;

        prev.next = null;
        while (cur != null) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        return  prev;
    }
}
