// Character variables
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var special = "!@#$%^&*".split("");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function for the generated password
function generatePassword() {

  // Alert the user on how many characters are accepted
  alert("Your password needs to be between 8 and 128 characters")

  // Declared the variable passWordSize and assigned it to user input from prompt
  var passWordSize = prompt("How many characters do you want in your password?")

  // created a while loop where the passWordSize variable is less than 8 or is more than 128, and if these conditions are met it will alert the users input in the previous prompt
  while (passWordSize < 8 || passWordSize > 128) {
    alert("Your password size is " + passWordSize + ".")
  }

  // declared variables and assigned them to true or false with a confirm
  var confirmLower = confirm("Do you want to use Lower Case Letters")
  var confirmUpper = confirm("Do you want to use Upper Case Letters")
  var confirmNum = confirm("Do you want to use Numbers")
  var confirmSpecial = confirm("Do you want to use Special Characters")

  // created a while loop where the user has to choose atleast one specification
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
    break;
  }

  // declared variable securePassword and assigned it an empty array
  var securePassword = [];

  // if confirmed specifications are true then pull elements from the specified array and put it in the securePassword array
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

  // declare variable and assign it an empty string
  var finalSecurePassword = "";

  // create for loop where the variable i will be less than passWordSize and go up by 1
  // as long as the for loop is true, code will add the empty string with the random generated characters
  for (var i = 0; i < passWordSize; i++) {
    finalSecurePassword +=
      securePassword[Math.floor(Math.random() * securePassword.length)];
    console.log(finalSecurePassword);
  }

  // returns the newly generated password to the screen
  return finalSecurePassword;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

