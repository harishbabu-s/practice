
        
function MySort(arr) {
    //Selection
//   for(let i=0 ; i<arr.length; i++){
//     let minInd = i
//     for(let j=i+1; j<arr.length; j++){
        
//         if(arr[j]<arr[minInd]){
//             minInd = j
//         }
//     }
//     if(arr[minInd]<arr[i]){
//         arr[i] += arr[minInd];
//         arr[minInd] = arr[i] - arr[minInd]; 
//         arr[i] -= arr[minInd] ;
//     }

//   }

    //Bubble
    // for(let i=0; i< arr.length; i++){
    //     let tmpInd = 0;
    //     for(let j=1; j< arr.length - i; j++){
    //         if(arr[tmpInd]>arr[j]){
    //             arr[j] += arr[tmpInd];
    //             arr[tmpInd] = arr[j] - arr[tmpInd];
    //             arr[j] = arr[j] - arr[tmpInd]
    //         }
    //         tmpInd++;
    //     }
    // }

    // //Insertion
    // for(let i=1; i<arr.length; i++){
    //     for(let j=0; j<i+1; j++){
    //         if(arr[i]<arr[j]){
    //             [arr[i], arr[j]] = [arr[j],arr[i]]
    //             // arr[j] += arr[i];
    //             // arr[i] = arr[j] - arr[i];
    //             // arr[j] = arr[j] - arr[i]
    //         }
    //     }
    // }
    
    //return arr



    //QuickSort
    if (arr.length <= 1) {
        return arr;
    }

    // Select a pivot element
    const pivot = arr[0];
    
    // Divide the array into two partitions
    const left = [];
    const right = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the partitions
    const sortedLeft = MySort(left);
    const sortedRight = MySort(right);

    // Concatenate the sorted partitions with the pivot and return
    return sortedLeft.concat(pivot, sortedRight);
    


}

const unsortedArray = [56,36,-1,18,-12,2];
const sortedArray = MySort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 5, 6, 9]
        