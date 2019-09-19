//leetcode - Valid Parenthesis - easy

/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

 //input: s string
 //output: boolean
 var isValid = function(s) {

    //base case
    if(s.length == 0){
        return true
    }
    
    if(s.length == 1){
        return false
    }

    let stack = [];

    const match = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(let i = 0; i < s.length; i++){
        //push opening brackets
        if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
            stack.push(s[i]);
        }
        //pop closing brackets
        else if(match[s[i]] != stack.pop()){
            return false;
        }
    }

    //if stack is empty, we have valid paren
    return stack.length == 0;
    
};

console.log('answer:', isValid("(("))