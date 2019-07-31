/*
leetCode Remove Duplicates from Sorted LinkedList - easy - July 31, 2019
Given a sorted linked list, delete all duplicates such that
each element appears only once.

ex: 
input: 1->1->2
output: 1->2
*/

function ListNode(val) {
      this.val = val;
      this.next = null;
}

//input: {LinkedNode} head
//output: {LinkedNode}
var deleteDuplicates = function(head) {
    //validate input
    if(!head)
        return head

    let current = head;
    while(current.next != null){
        var next = current.next;
        if(current.val == next.val){
            //skip same value
            current.next = current.next.next;
        }
        else
            current = current.next
    }
    return head;
};

var a = new ListNode('1');
var b = new ListNode('1');
var c = new ListNode('2');

a.next = b;
b.next = c;

console.log(a)

console.log(deleteDuplicates(a))
