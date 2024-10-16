const findConsecutive = (array) => {
  //T-O(n) , S-O(1)
  maxCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 1 && array[i + 1] == 1) {
      maxCount++;
    }
  }
  console.log(maxCount);
};

findConsecutive([1, 1, 9, 1, 9, 1, 1, 1, 19, 7, 1, 1, 1, 3, 2, 5, 1]);
