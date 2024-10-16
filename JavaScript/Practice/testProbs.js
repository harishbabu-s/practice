function countCharacters(strg) {
  // T-O(n) , S-O(k) where k is the number of unique characters in the string
  // const charCount = {};
  // const len = str.length;

  // for (let i = 0; i < len; i++) {
  //     const char = str[i];
  //     charCount[char] = (charCount[char] || 0) + 1;
  // }

  // return charCount;

  // T-O(n) , S-O(n)
  let str = strg.split("");

  const cnt = str.reduce((res, item) => {
    if (res[item]) {
      res[item]++;
    } else {
      res[item] = 1;
    }

    return res;
  }, {});

  return cnt;
}

const result = countCharacters("helaalo");
console.log(result);
