const findFactorial = (num) => {
  //T-O(n) , S-O(n)
  if (num == 1 || num == 0) {
    return 1;
  }
  return num * findFactorial(num - 1);
};

console.log(findFactorial(2));
