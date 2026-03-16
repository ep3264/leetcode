package com.leetcode;

public class ReverseLinkedList {

    public static void main(String[] args) {
        ListNode.printList(
                new ReverseLinkedList().reverseList(ListNode.HEAD)
        );
    }

    public ListNode reverseList(ListNode head) {
        if (head.next == null) return head;

        ListNode last = reverseList(head.next);
        var next = head.next;
        next.next = head;
        head.next = null;

        return last;
    }

}
