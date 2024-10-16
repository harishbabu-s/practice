function findMax(arr) {
  //T-O(n) , S-O(1)
  return Math.max(...arr);

  //T-O(n) , S-O(1)
  // let max = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] > max) {
  //     max = arr[i];
  //   }
  // }
  // return max;
}

const numbers = [1, 6, -33, 9, 4, 8, 2];
console.log("Maximum number is:", findMax(numbers));
