const removeDuplicates = (arr) => {
  //T-O(n^2) , S-O(n)
  //   let uniqueValues = [];
  //   arr.forEach((element) => {
  //     if (!uniqueValues.includes(element)) {
  //       uniqueValues.push(element);
  //     }
  //   });
  //   return uniqueValues;

  //T-O(n) , S-O(n)
  const uniqueArray = [...new Set(array)];
  return uniqueArray;
};

console.log(removeDuplicates([2, 6, 3, 5, 1, 3, 2, 5, 2, 6, 6, 3, 2, 9, 7]));
