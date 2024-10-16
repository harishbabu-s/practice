
//MINE      
function selectionSort(arr) {
    //T-O(n^2) , S-O(1)
    for(let i=0 ; i<arr.length; i++){
      let minInd = i
      for(let j=i+1; j<arr.length; j++){
          
          if(arr[j]<arr[minInd]){
              minInd = j
          }
      }
      if(arr[minInd]<arr[i]){
          arr[i] += arr[minInd];
          arr[minInd] = arr[i] - arr[minInd]; 
          arr[i] -= arr[minInd] ;
      }
  
    }
  
    return arr
  
  }
  
  const unsortedArray = [12,-5,0,7,3];
  const sortedArray = selectionSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 2, 3, 5, 6, 9]
          