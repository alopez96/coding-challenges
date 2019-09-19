//leetcode - easy
/*
palindrome number
Determine whether an integer is a palindrome. 
An integer is a palindrome when it reads the same backward as forward.

*/

var palindromeFirstSol = function(num){
    let nString = num.toString().split('').reverse().join('');

    if(nString == num.toString())
        return true    
    else
        return false
}

var x = -121;
console.log(palindromeFirstSol(x));


//Solution without converting into string