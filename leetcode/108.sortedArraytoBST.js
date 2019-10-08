/*
leetcode 108. Convert Sorted Array to Binary Search Tree - easy

Given an array where elements are sorted in ascending order, 
convert it to a height balanced BST.
For this problem, a height-balanced binary tree is defined as a 
binary tree in which the depth of the two subtrees of every node never 
differ by more than 1.

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
*/

//class for node
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const BST = require('./../DataTypes/BinarySearchTree');

//input: array (nums)
//output: BST
/*
Method to convert sorted array to Binary Search Tree
it starts at the midpoint of the array, making it the root of the BST
Then moves to left, and right, adding each element to tree
runtime: O(n) - we have one loop going through entire array
*/
var sortedArrayToBST = function(nums){
  //validate
  if (!nums.length) return null;

    function build (low, high) {
      const mid = Math.floor((high + low) / 2);
      if (low >= high) return null;
      
      const newNode = new Node(nums[mid]);
      newNode.left = build(low, mid);
      newNode.right = build(mid + 1, high);
      
      return newNode;
  }

  return build(0, nums.length);

}

console.log(sortedArrayToBST([-10,-3,0,5,9]));