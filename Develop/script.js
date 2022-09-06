// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  var passArray = [];
  var passLength = prompt("How long do you want your password?", "8 to 128 characters");

  if (passLength >= 8 && passLength <= 128) {

  } else {
    alert("Please choose a number between 8 and 128")
    return;
  };

  var useLower = confirm("Would you like to include lower case letters?")
  if (useLower){
    passArray.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
  };
  var useUpper = confirm("Would you like to include upper case letters?")
  if (useUpper){
    passArray.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
  };
  var useNumber = confirm("Would you like to include Numbers?")
  if (useNumber){
    passArray.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
  };
  var useSpec = confirm("Would you like to include special characters?")
  if (useSpec){
    passArray.push('~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', '}', '|', ':', ';', '<', '>', '?',)
  };
  console.log(passArray);

  function generatePassword(passLength, passArray) {
    var password = [];
    for (let i = 0; i < passLength; i++) {
      password.push(passArray[Math.floor(Math.random() * passArray.length)]);  
    };
    console.log(password);
    return password;
  }

  var password = generatePassword(passLength, passArray).join('');
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
