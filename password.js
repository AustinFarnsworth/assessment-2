const readline = require("readline");

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function hello() {
    console.log("Welcome to the password validator tool!");
}

hello();

interface.question("What is your name?", 
function(name) { 
    console.log(`Hello ${name}`);

    interface.question("Please type in a passoword that is at least 10 characters long", 
function (password) {
    if (password.length !== 10) {
        console.log("Congrats! Valid password")
        interface.close("Password tool will now close");
    } else {
        console.log("Password does not meet 10 character requirement.");
    }

    

    });  
});


