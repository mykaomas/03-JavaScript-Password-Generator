// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays for characters needed in password
const specialCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '{', '}', '|', ':', ';', '<', ',', '>', '.', '?', '/'];
console.log(specialCharacters);

const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
console.log(upperCaseLetters);

const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log(lowerCaseLetters);

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
console.log(numbers);

// Declare global variable 
var randomPassword;

// Create function to generate password with correct criteria
function generatePassword() {

  // Confirm button was pressed 
  console.log("Button was pressed");

  // User prompted to enter a password length of between 8 - 128
  var passwordLength = prompt('Please select password length between 8 and 128');

  // Safeguards in place to make sure a number is entered and the length criteria is met
  // Question will cycle through until conditions are met
    while (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128 || Number.isNaN(parseInt(passwordLength))){
    // Verify while loop is working
    console.log('Working');
    alert('Enter a number between 8 and 128');
    console.log('Alert: Criteria not met for password', passwordLength);
    passwordLength = prompt('Please enter number between 8 and 128');
    console.log('Password meets criteria', passwordLength);
  }
    
    // Prompt for user
    alert('Please select the characters you want included in password.');

    // Allows user to pick the characters they want in password
    // Verify what characters were selected on the backend
    var specialChar = confirm ('Do you want special characters included in password?');
    console.log(specialChar);

    var upperCase = confirm('Do you want uppercase letters included in password?');
    console.log(upperCase);

    var lowerCase = confirm('Do you want lowercase letters included in password?');
    console.log(lowerCase);

    var num = confirm('Do you want numbers included in password?');
    console.log(num);

  // User prompted to pick atleast one character for password
  // Question will cycle through until conditions are met
    while (!specialChar && !upperCase && !lowerCase && !num) {
    alert('Please choose at least one value');
    console.log('Alert: No character was selected');
    
    specialChar = confirm ('Do you want special characters included in password?');
    console.log(specialChar);

    upperCase = confirm('Do you want uppercase letters included in password?');
    console.log(upperCase);

    lowerCase = confirm('Do you want lowercase letters included in password?');
    console.log(lowerCase);

    num = confirm('Do you want numbers included in password?');
    console.log(num);
  }
  
  // Prompt for user
  alert ('Please wait while your password is being generated');

  // Verify password being generated on the backend
  console.log('Password Generating');

// Puts user choices into an array
      var userArray = [];
      if (lowerCase) {
        userArray.push(lowerCaseLetters)
      }
      if (upperCase) {
        userArray.push(upperCaseLetters)
      }
      if (specialChar) {
        userArray.push(specialCharacters)
      }
      if (num) {
        userArray.push(numbers)
      }
      if (userArray.length < 1) {
        return;
      }
      // Creates space for each character selected
      randomPassword = ''
      for (var i = 0; i <= passwordLength; i++) {
        console.log(userArray);
        // Cycles through the Array's (special characters, lowcase letters, uppercase letters and numbers)
        var arrayIndex = Math.floor(Math.random() * userArray.length);
        console.log(arrayIndex);
        // Chooses the selected Array
        var randomArray = userArray[arrayIndex];
        console.log(randomArray)
        // Selects Indexes at random
        var randomIndex = Math.floor(Math.random() * randomArray.length);
        console.log(randomIndex);
        // Selects characters from the selected index at random
        var randomCharacter = randomArray[randomIndex];
        // Concats random password with random character to produce password
        randomPassword += randomCharacter;
      }
        console.log(randomPassword);
        // Returns password to user
        return randomPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
