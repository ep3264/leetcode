function merge(arr, start, end) {
    if (start == end) return [arr[start]];

    let mid = Math.floor((start + end) / 2);  // start + Math.floor((end - start) / 2);
    let left = merge(arr, start, mid);
    let right = merge(arr, mid + 1, end);


    const result = [];
    let i = 0, j = 0;
    //merge logic
    while (i < left.length && j < right.length) {

        if (left[i] > right[j]) {
            result.push(left[i++]);
        }
        else {
            result.push(right[j++])
        }
    }
    // rest of elemets
    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);

    return result;
}

const a = [44, 123, 1, 332, 33, 12, 55, 5, 555, 77];
console.log(merge(a, 0, a.length - 1));