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
    var mid = Math.floor((nums.length-1)/2);

    //initialize and insert root
    var tree = new BST();    
    tree.insert(nums[mid]);
    var root = tree.getRoot();

    //variables to traverse left, and right
    let left = mid - 1;
    let right = mid + 1;

    while((left >= 0) || (right <= nums.length - 1)){
      //insert left        
      tree.insert(nums[left]);
      //insert right
      tree.insert(nums[right]);
      left--;
      right++;
    }

    tree.traverse(root);
}

sortedArrayToBST([-10,-3,0,5,9])