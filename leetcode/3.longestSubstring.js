/*
Longest Substring Without Repeating Characters - leetcode Medium
Given a string, find the length of the longest substring without repeating characters.
example:
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
*/


//input: string (s)
//output: number
var lengthOfLongestSubstring = function(s) {

    //base case
    if(s.length == 0 || s.length == 1)
        return s.length

    //store characters seen
    let seenList = ''

    let count = 0;
    let newCount = 0;

    //new method
    //substract first character
    while(s.length > 0){
        let i = 0;
        //loop through each resulting substring
        while(i < s.length){
            if(!seenList.includes(s[i])){
                //has not been seen
                seenList += s[i]
                newCount++
                //account for case where no characters repeat
                if(i + 1 == s.length){
                    count = i + 1
                } 
            }
            //has been seen
            else{
                s = s.slice(1)
                if(newCount > count){
                    count = newCount
                }
            }
            i++
        } 
    }
    return count
};

console.log(lengthOfLongestSubstring('pwwkew'))