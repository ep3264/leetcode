class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // Hash map <sorted string, [indicies]> 
        if (strs.length === 1) return [strs];
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
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
console.log(new Solution().groupAnagrams(strs));
