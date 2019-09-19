/*
486. leetcode
Predict the Winner
Given an array of scores that are non-negative integers. 
Player 1 picks one of the numbers from either end of the array 
followed by the player 2 and then player 1 and so on. 
Each time a player picks a number, that number will not be available 
for the next player. This continues until all the scores have been chosen. 
The player with the maximum score wins.

Given an array of scores, predict whether player 1 is the winner. 
You can assume each player plays to maximize his score.

example
Input: [1, 5, 233, 7]
Output: True
Explanation: Player 1 first chooses 1. Then player 2 have to choose between 5 and 7. 
No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12), so you need to return 
True representing player1 can win.
*/

let myArray = [1,5,2];

//input: array
//output: boolean
var predictWinner = function(a){
    //validate input
    if(!a)
        return;
    
        
    let p1 = 0;
    let p2 = 0;

    let points = {
        p1: 0,
        p2: 0
    }

    let turn = 'p1';

    //loop through array until no more elements
    while(a.length > 0){
        //check case for player to go left

        //check case for player to go right

        //alteranate player
        if(turn === 'p1'){
            turn = 'p2';
        }
        else{
            turn = 'p1';
        }
    }

    return ('p1: ' + p1 + ' p2: ' + p2)

}

//helper function to remove left or right element
//input array, string
//output array
function helper(a, side, player){
    if(side === 'right'){
        //player choses right
        player += a.pop();
    }
    else if(side === 'left'){
        //player choses left
        player += a.shift();
    }
    return player;
}

console.log(predictWinner(myArray))


//greedy algorithm

/*

*/