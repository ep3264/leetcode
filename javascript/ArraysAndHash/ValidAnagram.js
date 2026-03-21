class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const f = new Map();

        for (const c of s) {
            console.log(typeof c); // string
            f.set(c, (f.get(c) ?? 0) + 1);
        }



        for (const c of t) {
            if (!f.has(c)) return false;

            f.set(c, f.get(c) - 1);
            if (f.get(c) === 0) f.delete(c);
        }

        return f.size === 0;
    }
}


const s = "racecar", t = "carrace";

const sol = new Solution();
console.log(sol.isAnagram(s, t));