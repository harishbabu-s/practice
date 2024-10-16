function squaredValueExists(arr1, arr2) {
  if (arr1.length == arr2.length) {
    let flag = false;

    for (let i of arr1) {
      if (!arr2.includes(i * i)) {
        return false;
      } else {
        flag = true;
      }
    }

    return flag;
  } else {
    return false;
  }
}

console.log(squaredValueExists([1, 2, 5, 9], [25, 4, 81, 1]));

//LearnDepth
function isSameFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let arrFreq1 = {};
  let arrFreq2 = {};

  for (let val of arr1) {
    arrFreq1[val] = (arrFreq1[val] || 0) + 1;
  }

  for (let val of arr2) {
    arrFreq2[val] = (arrFreq2[val] || 0) + 1;
  }

  for (let key in arrFreq1) {
    if (!key * key in arrFreq2) return false;
    if (arrFreq1[key] !== arrFreq2[key * key]) return false;
  }
  return true;
}

console.log(isSameFrequency([1, 2, 5, 9], [25, 4, 81, 1]));
