package com.leetcode;

public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }

    public static void printList(ListNode head) {
        var cur = head;

        while(cur != null) {
            System.out.println(cur.val);
            cur = cur.next;
        }
    }

    public static final ListNode HEAD = new ListNode(
            0,
            new ListNode(1,
                    new ListNode(2,
                            new ListNode(3))));
}
