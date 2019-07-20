
//leetcode roman to int

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let value = 0;

        
    let i = 0;
    while(i<s.length){
        if(s[i] == 'M'){
            console.log('M')
            value += 1000;
            i++;
        }
        if(s[i] == 'D'){
            console.log('D')
            value += 500;
            i++;
        }
        
        if(s[i] == 'C' && s[i+1] == 'D'){
            console.log('CD')
            value += 400;
            i += 2;
        }
        else if(s[i] == 'C' && s[i+1] == 'M'){
            console.log('CM')
            value += 900;
            i += 2;
        }
        else if(s[i] == 'C'){
            console.log('C')
            value += 100;
            i++;
        }

        if(s[i] == 'L'){
            value += 50;
            i++;
        }

        if(s[i] == 'X' && s[i+1] == 'L'){
            value += 40;
            i += 2;
        }
        else if(s[i] == 'X' && s[i+1] == 'C'){
            value += 90;
            i += 2;
        }
        else if(s[i] == 'X'){
            value += 10;
            i++;
        }

        if(s[i] == 'I' && s[i+1] == 'V'){
            value += 4;
            i += 2;
        }
        else if(s[i] == 'I' && s[i+1] == 'X'){
            value += 9;
            i += 2;
        }
        else if(s[i] == 'I'){
            value += 1;
            i++;
        }

        if(s[i] == 'V'){
            value += 5;
            i++;
        }
        
    }
    
    return value;
};

console.log('answer',romanToInt('LV'))
