/*
Implement strStr() - leetcode Easy
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
example:
Input: haystack = "hello", needle = "ll"
Output: 2
*/

//input: strings (haystack, neddle)
//output: number
var strStr = function(haystack, needle){
    //base case
    if(needle == ''){
        return 0
    }
    if(haystack.length == 0){
        return -1
    }
    //check to make sure needle exists in haystack
    if(haystack.includes(needle)){
        //needle exists
        for(let i = 0; i < haystack.length; i++){
            if(haystack.substr(i, needle.length) == needle){
                return i
            }
            /*also works            
            if(haystack.substring(i, i + needle.length) == needle){
                return i
            }*/
        }
    }
    else{
        //needle DNE
        return -1
    }
    
};


//short JS solution
var strStr2 = function(haystack, needle){
    return haystack.indexOf(needle)
}

console.log(strStr('hello', 'll'))