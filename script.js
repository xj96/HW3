// Character variables
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var special = "!@#$%^&*".split("");


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria

  alert("Your password needs to be between 8 and 128 characters")

  var passWordSize = prompt("How many characters do you want in your password?")

  while (passWordSize < 8 || passWordSize > 128) {
    alert("Your password size is " + passWordSize + ".")
  }
  var confirmLower = confirm("Do you want to use Lower Case Letters")
  var confirmUpper = confirm("Do you want to use Upper Case Letters")
  var confirmNum = confirm("Do you want to use Numbers")
  var confirmSpecial = confirm("Do you want to use Special")

  while (
    confirmLower !== true &&
    confirmUpper !== true &&
    confirmNum !== true &&
    confirmSpecial !== true
  ) {
    var confirmLower = confirm("Do you want to use Lower Case Letters")
    var confirmUpper = confirm("Do you want to use Upper Case Letters")
    var confirmNum = confirm("Do you want to use Numbers")
    var confirmSpecial = confirm("Do you want to use Special")
  }

  var securePassword = [];

  if (confirmLower === true) {
    securePassword = securePassword.concat(lowercase)
  }
  if (confirmUpper === true) {
    securePassword = securePassword.concat(uppercase)
  }
  if (confirmNum === true) {
    securePassword = securePassword.concat(numbers)
  }
  if (confirmSpecial === true) {
    securePassword = securePassword.concat(special)
  }

  var finalSecurePassword = "";

  for (var i = 0; i < passWordSize; i++) {

    finalSecurePassword +=
      securePassword[Math.floor(Math.random() * securePassword.length)];
    console.log(finalSecurePassword);
  }

  return finalSecurePassword;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

  // GIVEN I need a new, secure password
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // Write password to the #password input

