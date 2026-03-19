import { log } from "./include.js";
// Example arrays with nested arrays
let array1 = [[1, 2], [3, 4]];
let array2 = [[5, 6], [7, 8]];
let array3 = [[9, 10]];

// Concatenating arrays that contain other arrays
let combinedArray = array1.concat(array2);
console.log(combinedArray);


let a = [1, 2, 3];
a.concat(4, 5)          // => [1,2,3,4,5] 
let b = a.concat([4, 5], [6, 7])   // => [1,2,3,4,5,6,7]; arrays are  flattened
console.log(b);

let array4 = [[1, 4], [2, 3]];
log(array4.concat([1, 3]));

let arrayWithExtraValues = array1.concat(array2, [[11, 12]], [13, 14]);
console.log(arrayWithExtraValues);
// Output: [[1, 2], [3, 4], [5, 6], [7, 8], [11, 12], [13, 14]]

let numbers = [1, 2, 3, 4, 5];

// push: Adds an element to the end of the array
numbers.push(6);
numbers.push(...[7, 8]); //  to flatten it explicitly
console.log(numbers); // Outputs: [1, 2, 3, 4, 5, 6]

let arr = [1, 2, 3, 4, 5];

// 1. slice(): Returns a shallow copy of a portion of an array into a new array.
let slicedArray = arr.slice(1, 4); // Elements from index 1 to 3 (4 is not included)
console.log(slicedArray); // Output: [2, 3, 4]

// 2. splice(): Changes the contents of an array by removing or replacing existing elements.
let splicedArray = arr.splice(2, 2, 6, 7); // Removes 2 elements from index 2 and adds 6 and 7
console.log(arr); // Output: [1, 2, 6, 7, 5]
console.log(splicedArray); // Output: [3, 4] (the removed elements)

// 3. fill(): Fills all the elements of an array from a start index to an end index with a static value.
let filledArray = arr.fill(0, 2, 4); // Fills elements from index 1 to 3 with 0
console.log(filledArray); // Output: [ 1, 2, 0, 0, 5 ]

// 4. copyWithin(): Shallow copies part of an array to another location in the same array.
let copiedArray = filledArray.copyWithin(0, -2, filledArray.length); // Copies elements from index 1 to 2 to the beginning
console.log(copiedArray); // Output: [ 0, 5, 0, 0, 5 ]

let points = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points;

log(x1 === points[0].x && y1 === points[0].y && x2 === points[1].x && y2 === points[1].y) // => true