/**
 * @param {string} str
 * @param {number} sz
*/
function revrot(str, sz) {
    if (sz <= 0 || str === "")
        return "";
    const result = [];

    for (let i = 0; i < str.length; i += sz) {
        if (i + sz <= str.length)
            result.push(str.slice(i, i + sz))
    }

    if (!result.length) return "";

    const ret = [];
    for (const s of result) {
        const strArr = s.split("");
        if (strArr.map(s => -s).reduce((a, b) => a + b) % 2 == 0) {
            ret.push(strArr.reverse().join(""));
        } else {
            let str = s.slice(1, s.length) + s[0];
            ret.push(str);
        }
    }

    return ret.length ? ret.join("") : "";

}

console.log(revrot("733049910872815764", 5))