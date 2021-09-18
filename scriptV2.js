////pre-made code section
// Assignment Code
//Grabs the generate button and assigns it to generateBtn
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
//writes the password to the text area box
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

////my code section
// Ask user for length
let length = prompt("How long would you like your password to be?")

//validate length to be between 8 and 128 characters
if (length >= 8 && length <= 128 ) {
} else {
    alert("Password length must be between 8 and 128 characters");
}

//ask user if any lowercase
let includeLower = confirm("Would you like any lowercase letters?")

//ask user if any uppercase
let includeUpper = confirm("Would you like any uppercase letters?")

//ask user if any numbers
let includeNumber = confirm("Would you like any numbers letters?")

//ask user is any symbols
let includeSymbol = confirm("Would you like any symbols letters?")

//validate to have at least one of the 4 above options
let passSelection = {
    length: length,
    includeLower: includeLower,
    includeUpper: includeUpper,
    includeNumber: includeNumber,
    includeSymbol: includeSymbol
}

if (passSelection.includeLower===false && passSelection.includeUpper===false && passSelection.includeNumber===false && passSelection.includeSymbol===false) {
    alert("Please choose at least one of the options after length.")
}

//function that takes variables and options and generates a random password

    //1- make array with the characters for the options that are accepted
let validItems= [];

let upperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let number= [0,1,2,3,4,5,6,7,8,9];
let symbol= ["~","@", "#","$","%","^","&","*","?","<",">"];
      
//go through options selected (if include...) combine to vaild items

if(includeUpper){
    validItems=validItems.concat(upperCase);
} else {
    //don't include
}

if(includeLower){
    validItems=validItems.concat(lowerCase);
} else {
    //don't include
}

if(includeNumber){
    validItems=validItems.concat(number);
} else {
    //don't include
}
if(includeSymbol){
    validItems=validItems.concat(symbol);
} else {
    //don't include
}

    //2- make new array to push randomly at least one character from the selected options arrays



    //3- push randomly according to length in a loop to a new array


let finalPassword = [];

for (let i=0; i < (length.valueOf()); i++){
    let character = validItems[Math.floor(Math.random() * validItems.length)];
    finalPassword=finalPassword.concat(character);
    
}

return finalPassword.join("")


}
//return password to HTML password text area

//validate that password contains at least 1 of each selection chosen
//if not, then loop again
