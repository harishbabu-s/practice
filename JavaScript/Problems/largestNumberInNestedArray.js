
//MINE
function findLargestElement(arr) {
    //T-O(n) , S-O(n)
    let max = 0;
 
    for(let i of arr){
     if(typeof i == "object"){
        let maxOfArr = findLargestElement(i);
        if(maxOfArr > max){
         max = maxOfArr;
        }
     }
     if(i > max){
         max = i;
     }
     
    }
 
    return max;
 
 }
 
 const nestedArray = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
 console.log("Largest element:", findLargestElement(nestedArray));

 

 //LearnDepth
function findLargestElement1(arr) {
    //T-O(n) , S-O(1)
    let max = Number.NEGATIVE_INFINITY; // Initialize max to smallest possible number

    // Helper function to traverse nested arrays
    function traverse(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                // If element is an array, recursively call traverse function
                traverse(arr[i]);
            } else {
                // If element is not an array, update max if needed
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
        }
    }

    // Start traversing the input array
    traverse(arr);

    return max;
}

// Example usage:
const nestedArray1 = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
console.log("Largest element:", findLargestElement1(nestedArray1));
        
         