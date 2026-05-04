package com.leetcode.linkedlist;

import java.util.ArrayList;
import java.util.List;

public class ListNode {
    public  int val;
    public ListNode next;

    ListNode() {
    }

    public ListNode(int val) {
        this.val = val;
    }

    public ListNode(int val, ListNode next) {
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

    public static ListNode toLinkedList(Integer[] arr) {
        if (arr == null || arr.length == 0) return null;

        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        for (int val : arr) {
            current.next = new ListNode(val);
            current = current.next;
        }

        return dummy.next;
    }

    public static List<Integer> toList(ListNode head) {
        List<Integer> result = new ArrayList<>();

        while (head != null) {
            result.add(head.val);
            head = head.next;
        }

        return result;
    }

    public static final ListNode HEAD = new ListNode(
            0,
            new ListNode(1,
                    new ListNode(2,
                            new ListNode(3))));
}
