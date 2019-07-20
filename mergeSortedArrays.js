//interviewCake
//July 3rd, 2019

/*
We have our lists of orders sorted numerically already, in arrays. 
Write a function to merge our arrays of orders into one sorted array.

see: https://www.interviewcake.com/question/javascript/merge-sorted-arrays?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23250:%20Merge%20Sorted%20Arrays&utm_medium=email&utm_medium=email
*/

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

 //input: two arrays: myArray, alicesArray
 //output: single array

 //lets assume arrays are same length and same data type
 //since we are dealing with cookies sold, we are going to assume all ints are positive
 var mergeArrays = function(a, b){

    //base cases
    if(a.length == 0 && b.length == 0){
        return []
    }
    if(a.length == 0 && b.length != 0){
        return b
    }
    if(b.length == 0 && a.length != 0){
        return a
    }

    let finalArray = []
    let i = 0;
    let j = 0;

    while(i < a.length || j < b.length){
        //handle case when were at the end of either array
        if(a[i] < b[j]){
            finalArray.push(a[i])
            i++;
        }
        else{
            finalArray.push(b[j])
            j++;
        }
    }

    return finalArray
    
};


//short JS solution
var jsSortSolution = function(a,b){
    return a.concat(b).sort(function(a, b){return a-b})
}

console.log(mergeArrays(myArray, alicesArray));
console.log(jsSortSolution(myArray, alicesArray));