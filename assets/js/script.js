// Arrays for numbers, upper, lower, and special characters
var num = ["1","2","3","4","5","6","7","8","9","0"];
var upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "`", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "|"];

// Button
var generateBtn = document.querySelector(".btn");
    let pw = document.querySelector(".card-body");

// Write password to the #password input
function writePassword() {
    
var password = generatePassword();

var passwordText = document.querySelector("#password");
passwordText.value = password;
}
function generatePassword() {
//  User prompts for passwor creation
    // Length of password - greater than 8 and less than 128 - # becomes lenght of password
    var lengthQ = prompt("How many numbers would you like your password to be?");
    console.log(lengthQ);
    if (lengthQ<8) {
        alert("Password must be at least 8 characters.");
    }
    else if (lengthQ>128) {
        alert("Password may not be more than 128 characters.");   
    }
    
        // Characters to include - Num, Up, Low, Spec - Y, y, Yes, YES, or equivalent.. others = NO
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

    var endPassword = []
    var possibleLetters = []
    var yesChars = []

if (numQ) {
possibleLetters = possibleLetters.concat(num)
yesChars.push(getRandom(num))
console.log(yesChars)
}
if (upCaseQ) {
possibleLetters = possibleLetters.concat(upCase)
yesChars.push(getRandom(upCase))
}
if (lowCaseQ) {
possibleLetters = possibleLetters.concat(lowCase)
yesChars.push(getRandom(lowCase))
}
if (specCharQ) {
possibleLetters = possibleLetters.concat(specChar)
yesChars.push(getRandom(specChar))
}

for (var i = 0; i <lengthQ; i++) {
    var character = getRandom(possibleLetters)
    endPassword.push(character)
}

for (let i = 0; i < yesChars.length; i++) { 
    endPassword [i] = yesChars [i]  
}

return endPassword.join("")
}
// Add event listener to generate button
function getRandom (array){
var index = Math.floor(Math.random() * array.length)
var element = array[index]
return element
}


generateBtn.addEventListener("click", writePassword);
