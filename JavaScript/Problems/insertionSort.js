
//MINE
function insertionSort(arr) {
    //T-O(n^2) , S-O(1)
    for(let i=1; i<arr.length; i++){
        for(let j=0; j<i+1; j++){
            if(arr[i]<arr[j]){
                arr[j] += arr[i];
                arr[i] = arr[j] - arr[i];
                arr[j] = arr[j] - arr[i]
            }
        }
    }
    return arr
  
  }
  
  const unsortedArray = [12,-5,0,7,3];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray);
          