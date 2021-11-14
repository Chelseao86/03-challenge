// Arrays
var num = ["1","2","3","4","5","6","7","8","9","0"];
var upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// Button & User prompts
var generateBtn = document.querySelector(".btn");{
    let pw = document.querySelector(".card-body");

var LengthQ = prompt("How many numbers would you like your password to be?");
console.log(promptInput);
if (LengthQ<8) {
    alert("Password must be at least 8 characters.");
}
else if (LengthQ>128) {
    alert("Password may not be more than 128 characters.");
}
else {
    pw.innerHTML = (passLength);    
}


var upCaseQ = prompt("Do you want to include upper-case letters?");
console.log(promptInput);
if (upCaseQ="yes") {
pw.innerHTML = (upCase)
}


var lowCaseQ = prompt("Do you want to include lower-case letters?")
console.log(promptInput);
if (upLowQ="yes"){
pw.innerHTML = (lowCase)
}

var specCharQ = prompt("Do you want to include special characters?")
console.log(promptInput)
if (SpecCharQ="yes"){
pw.innerHTML = (specChar)
}
}

// Write password to the #password input
function writePassword() {
generatePassword(upCase,lowCase,specChar) {
        var endPassword = ""
        for (var i = 0; i < passLength; i++) {
            var indexNum = Math.floor(Math.random() * pasLength)
            endPassword = endPassword + [indexNum]
        }
        
        }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

