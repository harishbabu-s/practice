const checkIfPalindromeForString = (str) => {
  //T-O(n/2) , S-O(1)
  let result = true;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      result = false;
      break;
    }
  }
  return result;
};

console.log(checkIfPalindromeForString("racecar"));
console.log(checkIfPalindromeForString("helloworld"));

const checkIfPallindromeForNumber = (num) => {
  //   T-O(n/2) , S-O(1)
  //   str = String(num);
  //   for(let i = 0; i < str.length /2 ; i++){
  //       if(str[i] !== str[str.length - 1 - i] ){
  //           return false;
  //           break;
  //       }
  //   }
  //   return true;

  //T-O(log10(n)) , S-O(1)
  if (num < 0) return false;

  let originalNum = num;
  let reversedNum = 0;

  while (num > 0) {
    const digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
  }

  return originalNum === reversedNum;
};

console.log(checkIfPallindromeForNumber(12345));
console.log(checkIfPallindromeForNumber(12321));
