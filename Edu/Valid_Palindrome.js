class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const p = /[A-Za-z0-9]/;
        for (let i = 0, j = s.length - 1; i < j; j--, i++) {

            while (!p.test(s[i]) && i < j) {
                i++;
            }
            while (!p.test(s[j]) && j > i) {
                j--;
            }

            if (s[i].toLowerCase() !== s[j].toLowerCase())
                return false;

        }
        return true;
    }
}

const sol = new Solution;

console.log(sol.isPalindrome("Was it a car or a cat I saw?"));