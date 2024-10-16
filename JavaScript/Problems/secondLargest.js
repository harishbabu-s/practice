function secondLargest(arr) {
  //T-O(n log n) , S-O(1)
  let sorted = arr.sort((a, b) => b - a);
  return sorted[1];

  //LearnDepth
  // function findSecondLargest(arr) {
  //     // T-O(n) , S-O(1)
  //     if (arr.length < 2) {
  //         throw new Error("Array must contain at least two elements.");
  //     }

  //     let largest = -Infinity;
  //     let secondLargest = -Infinity;

  //     for (let i = 0; i < arr.length; i++) {
  //         if (arr[i] > largest) {
  //             secondLargest = largest;
  //             largest = arr[i];
  //         } else if (arr[i] > secondLargest && arr[i] < largest) {
  //             secondLargest = arr[i];
  //         }
  //     }

  //     if (secondLargest === -Infinity) {
  //         throw new Error("There is no second largest element in the array.");
  //     }

  //     return secondLargest;
  // }

  // // Example usage:
  // const array = [10, 5, 20, 8, 12];
  // console.log(findSecondLargest(array)); // Output: 12

  //Codeium
  //   let max = arr[0];
  //   let secondMax = arr[0];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > max) {
  //       secondMax = max;
  //       max = arr[i];
  //     } else if (arr[i] > secondMax && arr[i] < max) {
  //       secondMax = arr[i];
  //     }
  //   }
  //   return secondMax;
}

console.log(
  secondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 12, 13, 14, 15, 16, 17])
);
