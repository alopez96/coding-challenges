/*
Sep 18
leetcode 5. longest palindromic substring (Medium)
Given a string s, find the longest palindromic substring in s.
You may assume that the max length of s is 1000.

example:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Input: "cbbd"
Output: "bb"
*/

//input: string (s)
//output: string (modified s)
var  longestPalindrome = function(s){
    let left = 0;
    let right = s.length - 1;

    let palindrome = '';

    //validate
    if(!s || (s.length == 0)){
        return;
    }

    //check case with two characters
    if(s.length == 2){
        if(s[0] == s[1]){
            palindrome = s[0]+s[1];
        }
        else{
            palindrome = '';
            return;
        }
    }

    //handle even case
    if((s.length % 2) == 0){
        //set pointers on either side of string
        //traverse until left is 1 less than right

        while(left != (right - 1)){
            palindrome = helperCompareChar(s,left,right,palindrome);
            //increment left, decrement right
            left++;
            right--;
            //handle case when only two characters left to check
            if(left == (right - 1)){
                palindrome = helperCompareChar(s,left,right,palindrome);
            }
        }
    }
    else{
        //set pointers on either side of string
        //and traverse each side, until you meet in the middle
        while(left != right){
            palindrome = helperCompareChar(s,left,right,palindrome);
            //increment left, decrement right
            left++;
            right--;
        }
    }
    console.log('palindrome', palindrome);
    return palindrome;
}

//compare string, return palindrome
function helperCompareChar(s, left, right, palindrome){
    //matching letter found
    if(s[left] == s[right]){
        palindrome += s[left] + s[right];
    }
    //letters do not match
    else{
        palindrome = '';
    }
    return palindrome;
}


longestPalindrome('acdca');//passing
longestPalindrome('acdbca');//passing
longestPalindrome('babad');//failing