function fibonacciSequence(numTerms) {
  //T-O(n) , S-O(n)
  if (numTerms <= 0) {
    return [];
  } else if (numTerms === 1) {
    return [0];
  }

  let res = [0, 1];
  let currentValue = 1;
  let previousValue = 0;
  for (let i = 2; i < numTerms; i++) {
    res[i] = previousValue + currentValue;
    previousValue = currentValue;
    currentValue = res[i];
  }

  return res;

  //   const sequence = [0, 1];

  //     for (let i = 2; i < numTerms; i++) {
  //         const nextFibonacci = sequence[i - 1] + sequence[i - 2];
  //         sequence.push(nextFibonacci);
  //     }

  //     return sequence;
}

console.log(fibonacciSequence(10));
