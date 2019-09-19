/*
leetcode 872. Leaf Similar Trees - Easy - Sept 19
Consider all the leaves of a binary tree.  
From left to right order, the values of those leaves form a leaf value sequence.
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the two given trees with head nodes root1 and r
oot2 are leaf-similar.
Note: Both of the given trees will have between 1 and 100 nodes.
*/

var Tree = require('./DataTypes/BinarySearchTree');
 
//input: TreeNode (root1), TreeNode (root2)
//output: boolean 
var leafSimilar = function(t1, t2) {
    
};

var tree1 = new Tree();
tree1.insert(5);
tree1.insert(2);
tree1.insert(6);
tree1.insert(7);
tree1.insert(1);
var myroot = tree1.getRoot();
tree1.traverse(myroot);
tree1.printLeafs(myroot);