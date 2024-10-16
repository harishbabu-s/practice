//Mine
const sumOfThirds = (arr) => {
  //T-O(n) , S-O(1)
  let sum = 0;
  for (let i in arr) {
    if (i % 3 == 0) {
      sum += arr[i];
    }
  }
  return sum;
};

console.log(sumOfThirds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//LearnDepth
const sumOfThirdss = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 3) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumOfThirdss([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
