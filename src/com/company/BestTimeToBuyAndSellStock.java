package com.company;

public class BestTimeToBuyAndSellStock {
    public static void main(String[] args) {
        System.out.println(new BestTimeToBuyAndSellStock().maxProfit(new int[] {10,1,5,6,7,1}));
    }

    public int maxProfit(int[] prices) {
        if (prices == null || prices.length == 0) return 0;
        var max = 0;
        var min = prices[0];
        for (int i = 1; i < prices.length; i++) {
            max = Math.max(max, prices[i] - min);
            min = Math.min(min, prices[i]);

        }

        return max;
    }
}
