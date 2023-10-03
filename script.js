// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays for characters needed in password
const specialCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '{', '}', '|', ':', ';', '<', ',', '>', '.', '?', '/']
console.log(specialCharacters)

const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
console.log(upperCaseLetters)

const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
console.log(lowerCaseLetters)

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
console.log(numbers)

//Declare global variable 
var userPassword
var randomPassword

//Create function to generate password with correct criteria
function generatePassword() {

  //Confirm button was pressed 
  console.log("Button was pressed")

  //vars for password length
  var passwordLength = prompt('Please select password length between 8 and 128')

  //User prompted to enter a password length of between 8 - 128
  //Question will cycle through until conditions are met
  //(typeof lengthInput !== 'number') && NOT SURE HOW TO IMPLEMENT SAFEGUARD//
    while (passwordLength < 8 || passwordLength > 128){
    alert('Enter a number between 8 and 128')
    console.log('Alert: Criteria not met for password');
    passwordLength = prompt('Please enter number between 8 and 128');
  }
    //Verify length that was selected on the backend
    console.log(passwordLength)
    
    //Prompt for user
    alert('Please select the characters you want included in password.');

    //Allows user to pick the characters they want in password
    //Verify what characters were selected on the backend
    var specialChar = confirm ('Do you want special characters included in password?');
    console.log(specialChar);

    var upperCase = confirm('Do you want uppercase letters included in password?');
    console.log(upperCase);

    var lowerCase = confirm('Do you want lowercase letters included in password?');
    console.log(lowerCase);

    var num = confirm('Do you want numbers included in password?');
    console.log(num);

  //User prompted to pick atleast one character for password
  //Question will cycle through until conditions are met
    while (!specialChar && !upperCase && !lowerCase && !num) {
    alert('Please choose at least one value')
    console.log('Alert: No character was selected')
    
    specialChar = confirm ('Do you want special characters included in password?');
    console.log(specialChar);

    upperCase = confirm('Do you want uppercase letters included in password?');
    console.log(upperCase);

    lowerCase = confirm('Do you want lowercase letters included in password?');
    console.log(lowerCase);

    num = confirm('Do you want numbers included in password?');
    console.log(num);
    
    //Prompt for user
    alert ('Please wait while your password is being generated');

    //Verify password being generated on the backend
    console.log('Password Generating');
      }

//When all characters are selected

  if (specialChar && upperCase && lowerCase && num) {
  userPassword = specialCharacters.concat(upperCaseLetters, lowerCaseLetters, numbers)
  console.log(userPassword)

//When 3 characters are selected
} else if (specialChar && upperCase && lowerCase) {
  userPassword = specialCharacters.concat(upperCaseLetters, lowerCaseLetters)
  console.log(userPassword)

} else if (upperCase && lowerCase && num) {
  userPassword = upperCaseLetters.concat(lowerCaseLetters, numbers)
  console.log(userPassword)

} else if (specialChar && lowerCase && num) {
  userPassword = specialCharacters.concat(lowerCaseLetters, numbers)
  console.log(userPassword)

} else if (specialChar && upperCase && num) {
  userPassword = specialCharacters.concat(upperCaseLetters, numbers)
  console.log(userPassword)

//When 2 characters are selected
} else if (specialChar && upperCase) {
  userPassword = specialCharacters.concat(upperCaseLetters)
  console.log(userPassword)

} else if (specialChar && lowerCase) {
  userPassword = specialCharacters.concat(lowerCaseLetters)
  console.log(userPassword)

} else if (specialChar && num) {
  userPassword = specialCharacters.concat(numbers)
  console.log(userPassword)

} else if (upperCase && lowerCase) {
  userPassword = upperCaseLetters.concat(lowerCaseLetters)
  console.log(userPassword)

} else if (upperCase && num) {
  userPassword = upperCaseLetters.concat(numbers)
  console.log(userPassword)

} else if (lowerCase && num) {
  userPassword = lowerCaseLetters.concat(numbers)
  console.log(userPassword)

//Only 1 character was selected
} else if(specialChar) {
  userPassword = specialCharacters
  console.log(userPassword)

} else if(upperCase) {
  userPassword = upperCaseLetters
  console.log(userPassword)

} else if(lowerCase) {
  userPassword = lowerCaseLetters
  console.log(userPassword)

} else {
  userPassword = numbers
  console.log(userPassword)
}

//Passowrd length
randomPassword = ''

// Create a loop to randomize selection
for (var i = 0; i < passwordLength; i++) {
  randomPassword += userPassword[Math.floor(Math.random() * userPassword.length)]
  console.log(randomPassword)
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
