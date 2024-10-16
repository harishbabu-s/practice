//Mine
// function findPairs(input1, input2) {
//T-O(n^2) , S-O(n)
//     let res = []

//     for(let i = 0; i< input1.length; i++){
//         if(input1[i] + input1[i] == input2){
//             res.push([input1[i], input1[i]])
//         }
//         for(let j = i + 1; j< input1.length; j++){
//             if(input1[i] + input1[j] == input2){
//                 let pair = [input1[i], input1[j]]
//                 res.push(pair)
//             }
//         }
//     }

//     return res;
//     }

//     const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const input2 = 10;

//     const output = findPairs(input1, input2);
//     console.log(output); // [[1, 9], [2, 8], [3, 7], [4, 6], [5, 5]]

//LearnDepth
function findPairs(input1, input2) {
  //T-O(n) , S-O(n)
  const pairs = [];
  const seen = new Set();

  for (const num of input1) {
    const complement = input2 - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }

  return pairs;
}

const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const input2 = 10;

const output = findPairs(input1, input2);
console.log(output); // [[1, 9], [2, 8], [3, 7], [4, 6], [5, 5]]
