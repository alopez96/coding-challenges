//leetcode - easy

/*
palindrome number
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
*/

var x = -121

let nString = x.toString().split('').reverse().join('');

if(nString == x.toString()){
    console.log('true')
}

console.log(nString)