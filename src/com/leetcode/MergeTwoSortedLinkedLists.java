package com.leetcode;

public class MergeTwoSortedLinkedLists {


    public static void main(String[] args) {
        ListNode.printList(
                new MergeTwoSortedLinkedLists().mergeTwoLists(ListNode.HEAD, HEAD)
        );
    }
    
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null && list2 == null)
            return  null;

        if (list1 == null) return list2;
        if (list2 == null) return list1;

        if (list1.val > list2.val) {
            var ret = mergeTwoLists(list2.next, list1);
            list2.next = ret;

            return list2;
        } else {
            var ret = mergeTwoLists(list1.next, list2);
            list1.next = ret;
            return list1;
        }

    }




    public static final ListNode HEAD = new ListNode(
            0,
            new ListNode(2,
                    new ListNode(6,
                            new ListNode(8))));
}
