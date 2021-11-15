// Arrays
var num = ["1","2","3","4","5","6","7","8","9","0"];
var upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "`", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "|"];

// Button & User prompts
var generateBtn = document.querySelector(".btn");
    let pw = document.querySelector(".card-body");

var lengthQ = prompt("How many numbers would you like your password to be?");
console.log(lengthQ);
if (lengthQ<8) {
    alert("Password must be at least 8 characters.");
}
else if (lengthQ>128) {
    alert("Password may not be more than 128 characters.");   
}


var numQ = prompt("Do you want to include numbers?");
console.log(numQ);
if (numQ.toLowerCase()=="yes") {
    numQ=true
} else {
    numQ=false
}

var upCaseQ = prompt("Do you want to include upper-case letters?");
console.log(upCaseQ);
if (upCaseQ.toLowerCase()=="yes") {
upCaseQ=true
} else {
    upCaseQ=false
}


var lowCaseQ = prompt("Do you want to include lower-case letters?")
console.log(lowCaseQ);
if (lowCaseQ.toLowerCase()=="yes") {
lowCaseQ=true
} else {
    lowCaseQ=false
}

var specCharQ = prompt("Do you want to include special characters?")
console.log(specCharQ)
if (specCharQ.toLowerCase()=="yes"){
specCharQ=true 
} else {
specCharQ=false
}

// Write password to the #password input
function writePassword() {
    function generatePassword(numY, upCaseY, lowCaseY, specCharY) {
        var endPassword = ""
        var possibleLetters = []
if (numY) {
    possibleLetters = possibleLetters.concat(num)
    }
if (upCaseY) {
    possibleLetters = possibleLetters.concat(upCase)
    }
if (lowCaseY) {
    possibleLetters = possibleLetters.concat(lowCase)
}
if (specCharY) {
    possibleLetters = possibleLetters.concat(specChar)
}
for (var i = 0; i <lengthQ.length; i++) {
    var indexNum = Math.floor(Math.random() * lengthQ)
    endPassword = endPassword + possibleLetters[indexNum]
}
return endPassword
    }
var password = generatePassword(numQ,upCaseQ, lowCaseQ, specCharQ);
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
