/*
leetcode 872. Leaf Similar Trees - Easy - Sept 19
Consider all the leaves of a binary tree.  
From left to right order, the values of those leaves form a leaf value sequence.
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the given trees are leaf-similar.
Note: Both of the given trees will have between 1 and 100 nodes.
*/

var Tree = require('./DataTypes/BinarySearchTree');
 
//input: TreeNode (t1), TreeNode (t2)
//output: boolean 
var leafSimilar = function(t1, t2) {
    //validate
    if(!t1 || !t2)
        return;
    
    //get roots
    var root1 = tree1.getRoot();
    var root2 = tree2.getRoot();

    const leafs1 = t1.printLeafs(root1, []);
    const leafs2 = t2.printLeafs(root2, []);
    
    /****** note to self */
    //cannot compare array objects directly
    //stringify quick fix, but do not use in production code for it could cause bugs
    /********* *********/
    if(JSON.stringify(leafs1) === JSON.stringify(leafs2)){
        console.log('true')
        return true
    }
    else{
        console.log('false')
        return false
    }

};

var tree1 = new Tree();
tree1.insert(5);
tree1.insert(2);
tree1.insert(7);
tree1.insert(3);
tree1.insert(1);
tree1.insert(6);
tree1.insert(10);


var tree2 = new Tree();
tree2.insert(5);
tree2.insert(3);
tree2.insert(8);
tree2.insert(1);
tree2.insert(3);
tree2.insert(6);
tree2.insert(10);


leafSimilar(tree1, tree2);