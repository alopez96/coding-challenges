/*
Search Insert Position
Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.

example:
Input: [1,3,5,6], 5
Output: 2
Input: [1,3,5,6], 2
Output: 1
*/

//input: array (nums), number (target)
//output: number
var searchInsert = function(nums, target){
    //base case
    if(nums.length == 0){
        //if array is empty, add value as first element in array
        return 0
    }

    //case if element DNE in array
    if(!nums.includes(target)){
        //add element
        for(let i = 0; i < nums.length; i++){
            if(target < nums[i]){
                return i
            }
            else if(i == nums.length - 1){
                return nums.length
            }
        }
    }

    //element exists in array
    else{
        //implement binary serch
        return binarySearch(nums,target);
    }

}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}


console.log(searchInsert([1,3,5,6], 2))
