class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        /*
            from any step i, the number of ways to reach the top is:
            ways from i + 1
            plus ways from i + 2
        */
        const cache = new Int32Array(n).fill(-1);
        if (n <= 2) {
            return n;
        }
        let dp = new Array(n + 1).fill(0);
        dp[1] = 1;
        dp[2] = 2;
        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
}


const s = new Solution;

console.log(s.climbStairs(6));