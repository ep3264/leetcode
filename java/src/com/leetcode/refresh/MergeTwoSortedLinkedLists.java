package com.leetcode.refresh;

import com.leetcode.linkedlist.ListNode;

import static com.leetcode.linkedlist.ListNode.toLinkedList;

public class MergeTwoSortedLinkedLists {

    public static void main(String[] args) {
        ListNode.printList(
                new MergeTwoSortedLinkedLists().mergeTwoLists(ListNode.HEAD, toLinkedList(new Integer[]{0, 2, 6, 8}))
        );
    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null && list2 == null)
            return null;

        if (list1 == null) return list2;
        if (list2 == null) return list1;

        ListNode cur = list1;
        ListNode cur2 = list2;
        ListNode result = cur.val < cur2.val ? cur : cur2;
        while (cur != null && cur2 != null) {
            if (cur.val >= cur2.val) {
                ListNode prev = null;
                while (cur2 != null && cur.val >= cur2.val) {
                    prev = cur2;
                    cur2 = cur2.next;
                }
                prev.next = cur;
            } else {
                ListNode prev = cur;
                while (cur != null && cur.val < cur2.val) {
                    prev = cur;
                    cur = cur.next;
                }
                prev.next = cur2;
            }
        }
        return  result;
    }

}
