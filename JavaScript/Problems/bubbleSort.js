
        
function bubbleSort(arr) {
    //T-O(n^2) , S-O(1)
        for(let i=0; i< arr.length; i++){
            let tmpInd = 0;
            for(let j=1; j< arr.length - i; j++){
                if(arr[tmpInd]>arr[j]){
                    arr[j] += arr[tmpInd];
                    arr[tmpInd] = arr[j] - arr[tmpInd];
                    arr[j] = arr[j] - arr[tmpInd]
                }
                tmpInd++;
            }
        }
    
      return arr
    
    }
    
    const unsortedArray = [56,36,-1,18,-12,2];
    const sortedArray = bubbleSort(unsortedArray);
    console.log(sortedArray);
            