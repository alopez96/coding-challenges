/*
leetcode
July 20, 2019
27. Remove Element

Given an array nums and a value val, remove all instances of that value in-place and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with 
O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.

example:
Given nums = [3,2,2,3], val = 3,
Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length.
*/

let numsArray = [0,1,2,2,3,0,4,2]
let value = 2

//input: number[] (nums)
//input: number (val)
//input: number
var removeElement = function(nums, val) {
    let i = 0;
    let j = 0;
    while(i < nums.length){
        //keep value
        if(nums[i] != val){
            nums[j] = nums[i]
            j++
        }
        i++
    }
    return j
};

console.log(removeElement(numsArray, value))