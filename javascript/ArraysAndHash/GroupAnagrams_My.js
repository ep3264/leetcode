class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (!strs || !strs.length) return [];
        if (strs.length === 1) return [strs];

        // Hash map <sorted string, [indicies]> 
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            // O(nlogn)
            const str = strs[i].split('').sort().join('');
            if (map.has(str)) {
                const arr = map.get(str);
                arr.push(strs[i]);
            } else {
                map.set(str, [strs[i]]);
            }
        }

        return [...map.values()];
    }
}

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];

console.log(
    new Solution().groupAnagrams(strs)
);
