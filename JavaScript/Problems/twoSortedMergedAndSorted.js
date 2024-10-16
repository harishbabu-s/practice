function mergeSortedArrays(arr1, arr2) {
    //T-O(n + m) , S-O(n + m)
    let i = 0;
    let j = 0;
    let res = [];

    while(i < arr1.length || j < arr2.length) {

        if(arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    return res;

}

console.log(mergeSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));