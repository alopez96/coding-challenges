/*
leetcode 58
Length of Last Word - easy
Oct 8, 2019
Given a string s consists of upper/lower-case alphabets and empty space 
characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.
*/

//input: string s
//output: number
var lengthOfLastWord = function(s) {
    //validate input
    if(!s)
        return;

    //trim excess white space
    s = s.trim();

    let count = 0;

    //loop through string
    for(let i = 0; i < s.length; i++){
        count++;
        if(s[i] === ' '){
            count = 0;
        }
    }
    console.log('count', count)
}

lengthOfLastWord('Hello world') //pasing
lengthOfLastWord('a ') //pasing

//passing all cases on leetcode