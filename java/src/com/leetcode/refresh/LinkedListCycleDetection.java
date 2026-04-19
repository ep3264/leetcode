package com.leetcode.refresh;

import com.leetcode.linkedlist.ListNode;

public class LinkedListCycleDetection {
    public static final ListNode TAIL = new ListNode(3);
    public static final ListNode HEAD = new ListNode(0,
            new ListNode(1,
                    new ListNode(2,
                            TAIL)));

    static {
        TAIL.next = HEAD;
    }

    public static void main(String[] args) {
        System.out.println(
                new LinkedListCycleDetection().hasCycle(HEAD)
        );
    }

    public boolean hasCycle(ListNode head) {
        if (head == null) return false;
        var slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast == slow) {
                return true;
            }

        }


        return false;
    }
}
