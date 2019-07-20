/**
 * @param {string[]} emails
 * @return {number}
 */

var cleanEmail = new Set()

var numUniqueEmails = function(emails) {
    for (let i = 0; i < emails.length; i++){
        simplify(emails[i])
        
    }
    console.log('emails', cleanEmail)
};

//simplify each email to get reduced email
var simplify = function(email){
    for (let i = 0; i < email.length; i++){
        //ignore period
        if(email[i] == '.'){
            email = email.split('.').join('')
            cleanEmail.add(email)
        }
        //ignore everything after period
        if(email[i] == '+'){
            cleanEmail.add(email.slice(0,i))
        }
    }
}
