/*
leetcode
//July 20, 2019
//Remove Duplicates from Sorted Arrays
Given a sorted array nums, remove the duplicates in-place such that each element appear only once
and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array
in-place with O(1) extra memory.

example:
Given nums = [0,0,1,1,1,2,2,3,3,4],

Return length = 5, with the first five elements of nums 
being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
*/

let inputArray = [1,1,2];

//input: array
//output: int (representing length), also modified array, but not returned
var removeDuplicates = function(nums){
    //create object to store values seen
    let seenValues = {}

    for(let i = 0; i < nums.length; i++){
        //check if value has been seen
        if(seenValues[nums[i]] == null){
            //add value to seen
            seenValues[nums[i]] = 'seen';
            console.log('value has not been seen yet ' + nums[i])
        }
        //value has already been seen
        else{
            console.log('value has been seen ' + nums[i])
        }
    }
    return seenValues;
}


console.log(removeDuplicates(inputArray));