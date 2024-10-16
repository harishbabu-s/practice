//MINE

function flattenArray(arr) {
  //T-O(n) , S-O(n)
  let res = [];
  for (let i of arr) {
    if (typeof i === "object") {
      res.push(...flattenArray(i));
    } else {
      res.push(i);
    }
  }
  return res;
}

const nestedArray = [1, [2, [3, 4], [7, 5]], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);

//LearnDepth

// function flattenArray(arr) {
//     const stack = [...arr];
//     const result = [];

//     while (stack.length) {
//         const next = stack.pop();
//         if (Array.isArray(next)) {
//             stack.push(...next);
//         } else {
//             result.push(next);
//         }
//     }

//     return result.reverse(); // Reverse the result to maintain original order
// }

// // Example usage:
// const nestedArray = [1, [2, [3, 4], [7,5]], 6];
// const flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
