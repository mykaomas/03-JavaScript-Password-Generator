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

//Create function to generate password
function generatePassword() {

  //Confirm button was pressed 
  console.log("Button was pressed")

  //Prompt for password criteria
  var passwordLength = prompt('Please select a password length of at least 8 but no more than 128')

  //User prompted to enter a password length of between 8 - 128
  //Question will repeat until user enter a valid length
  while (passwordLength < 8 || passwordLength > 128){
    alert('Please enter a valid value')
    console.log('Alert: Password was not generated')
    passwordLength = prompt('Please enter a password length between 8 and 128')
  }

  //Verify length that was selected
    console.log(passwordLength)

    alert('Please select the characters you want included in password.')

    //Have user pick the characters they want in password
    var specialChar = confirm ('Do you want special characters included in password?')
    console.log(specialChar)

    var upperCase = confirm('Do you want uppercase letters included in password?')
    console.log(upperCase)

    var lowerCase = confirm('Do you want lowercase letters included in password?')
    console.log(lowerCase)

    var num = confirm('Do you want numbers included in password?')
    console.log(num)

    while (!specialChar && !upperCase && !lowerCase && !num) {
    alert('Please choose at least one value')
    console.log('Alert: No character was selected')
    
    specialChar = confirm ('Do you want special characters included in password?')
    console.log(specialChar)

    upperCase = confirm('Do you want uppercase letters included in password?')
    console.log(upperCase)

    lowerCase = confirm('Do you want lowercase letters included in password?')
    console.log(lowerCase)

    num = confirm('Do you want numbers included in password?')
    console.log(num)

    alert ('Please wait while your password is being generated')
    }

    console.log('Password Generating')
}

//When 4 characters are selected

//When 3 characters are selected

//When 2 characters are selected

//Only 1 character was selected


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
