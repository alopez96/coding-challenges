//leetcode - easy

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

 //input: strs(String [])
 //output: string
var longestCommonPrefix = function(strs) {

    //base case
    if(strs.length == 0){
        return ""
    }

    let = prefix = strs[0]

    for(let i = 0; i < strs.length; i++){
        let j = 0;
        while(j < strs[i].length && prefix.length && prefix[j] == strs[i][j]){
            j++;
        }
        prefix = prefix.substring(0, j);
    }

    return prefix;
    
};

console.log('answer', longestCommonPrefix(["dog","flow","flight"]))