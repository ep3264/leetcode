class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = new Map();

        map.set("{", "}");
        map.set("(", ")");
        map.set("[", "]");

        const stack = [];

        for (const c of s) {
            if (stack.length === 0) {
                stack.push(c);
                continue;
            }

            const peek = stack[stack.length - 1];

            if (c == map.get(peek)) {
                stack.pop();
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}

let s = new Solution();
console.log(s.isValid("{{}}())"));