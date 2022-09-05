// Assignment code here

// prompt for pass word criteria

// criteria
  // 1 which criteria u want
      // [length, character types]
  // 2 length 8 - 128
  // 3 char types [include = lowerCase upperCase numeric specialCharacters]

// validate input, requires, length between 8-128 and at least 1 char type

// upon validation, output to user


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
