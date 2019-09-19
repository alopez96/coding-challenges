//Binary Search Tree

//class for node
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search tree class 
class BinarySearchTree 
{ 
    constructor(){
        this.root = null;
    }
    
    insert(data){
        //create a node
        var newNode = new Node(data);

        //if root is null -> add Node to root 
        if(this.root === null) 
            this.root = newNode; 
        else
            // find the correct position in the  
            // tree and add the node
            this.insertNode(this.root, newNode); 
    }

    //method to insert a node in a tree 
    //it traverses the tree to find the location 
    //to insert a node with a given data  
    insertNode(node, newNode) 
    {
        //if the data is less than the node 
        //go to left
        if(newNode.data < node.data) 
        { 
            //if left is null insert node here 
            if(node.left === null) 
                node.left = newNode;
            else
                //if left is not null recurr until  
                //null is found
                this.insertNode(node.left, newNode);  
        }

        //if the data is more than the node 
        //go to right
        else
        { 
            //if right is null insert node here 
            if(node.right === null) 
                node.right = newNode; 
            else
                //if right is not null recurr until  
                //null is found
                this.insertNode(node.right,newNode); 
        }
    }

    //return root node
    getRoot(){
        return this.root;
    }

    //traverse tree, at given node, go down left, then right
    traverse(node){
        if(node){
            this.traverse(node.left)
            console.log(node.data)
            this.traverse(node.right)
        }
    }

    //helper to print all leafs
    printLeafs(node){
        if(node){
            this.printLeafs(node.left)
            if(node.left == null && node.right == null){
                console.log('leaf', node.data)
            }
            this.printLeafs(node.right)
        }
    }
} 

module.exports = BinarySearchTree;


