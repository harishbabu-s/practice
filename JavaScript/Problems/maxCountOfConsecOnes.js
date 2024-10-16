const findConsecutive = (array) => {
  //T-O(n) , S-O(1)
  let maxCount = 0;
  let currentConsCount = 0;

  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === 1) {
      currentConsCount += 1;
      maxCount = Math.max(currentConsCount, maxCount);
    } else {
      currentConsCount = 0;
    }
  }

  console.log(maxCount);
};

findConsecutive([1, 9, 1, 9, 9, 19, 7, 1, 7, 1, 3, 2, 5, 1]);
