const findLongestWord = (sentence) => {
  //T-O(n) , S-O(1)
  let splitArray = sentence.split(" ");
  let currentWord = "";
  let longestWord = "";

  for (let i of splitArray) {
    currentWord = i;
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;

  //T-O(n) , S-O(n)
  // return sentence.split(' ').reduce((longest, current) => {
  //     return current.length > longest.length ? current : longest;
  // }, '');
};

console.log(findLongestWord("Hi Iam Saikrishna Iam a UI Developer"));
