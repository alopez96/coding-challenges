/*
Maximum Subarray - leetcode easy
Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum and return its sum.

example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, 
try coding another solution using the divide and conquer approach.
*/

//input: array (nums)
//output: number
var maxSubArray = function(nums){
    //base case
    if(nums.length == 0)
        return 0
    if(nums.length == 1)
        return nums[0]

    var tempLarge = 0;
    var largest = 0;

    for(let i = 0; i < nums.length; i++){
        tempLarge += nums[i];
        if(tempLarge > largest){
            largest = tempLarge;
        }
        if(tempLarge < 0){
            tempLarge = 0;
        }
    }
    return largest  
}

console.log(maxSubArray([-2,-1]))
