//Without built-in function
///MINE-----------
const reverseWords = (sampleString) => {
  //T-O(n) , S-O(n)
  let strArr = [];
  let word = "";

  for (let i = 0; i <= sampleString.length; i++) {
    if (sampleString[i] !== " " && i != sampleString.length) {
      word += sampleString[i];
    } else {
      strArr.push(word);
      word = "";
    }
  }
  for (let i = 0; i < strArr.length / 2; i++) {
    let tmp = strArr[i];
    strArr[i] = strArr[strArr.length - i - 1];
    strArr[strArr.length - i - 1] = tmp;
  }

  return strArr.join(" ");
};

console.log(reverseWords("learndepth is awesome"));

//LearnDepth answer
//T-O(n^2) , S-O(n)

const reverseWordsLD = (sampleString) => {
  let reversedSentence = "";
  let word = "";

  // Iterate over each character in the sampleString
  for (let i = 0; i < sampleString.length; i++) {
    // If the character is not a space, append it to the current word
    if (sampleString[i] !== " ") {
      word += sampleString[i];
    } else {
      // If it's a space, prepend the current word to the reversed sentence and
      //reset the word
      reversedSentence = word + " " + reversedSentence;
      word = "";
    }
  }

  // Append the last word to the reversed sentence
  reversedSentence = word + " " + reversedSentence;

  // Trim any leading or trailing spaces and log the result
  console.log(reversedSentence.trim());
};

// Example usage
reverseWordsLD("learndepth is awesome"); //"awesome is learndepth"
