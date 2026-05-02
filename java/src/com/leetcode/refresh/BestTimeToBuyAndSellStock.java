package com.leetcode.refresh;

public class BestTimeToBuyAndSellStock {
    public static void main(String[] args) {
        System.out.println(new BestTimeToBuyAndSellStock().maxProfit(new int[] {10,1,5,6,7,1}));
    }

    public int maxProfit(int[] prices) {
       var max = 0;
       var min = prices[0];
       for (int i = 1; i < prices.length; i++) {

            max = Math.max(prices[i] - min, max);
            min = Math.min(min, prices[i]);
        }


        return max;
    }
}
