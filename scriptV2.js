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
let lengthEl = prompt("How long would you like your password to be?")

//validate length to be between 8 and 128 characters
if (lengthEl >= 8 && lengthEl <= 128 ) {
} else {
    alert("Password length must be between 8 and 128 characters");
}

//ask user if any lowercase
let lowerEl = confirm("Would you like any lowercase letters?")

//ask user if any uppercase
let upperEl = confirm("Would you like any uppercase letters?")

//ask user if any numbers
let numberEl = confirm("Would you like any numbers letters?")

//ask user is any symbols
let symbolEl = confirm("Would you like any symbols letters?")

//validate to have at least one of the 4 above options
let passSelection = {
    lengthEl: lengthEl,
    lowerEl: lowerEl,
    upperEl: upperEl,
    numberEl: numberEl,
    symbolEl: symbolEl
}

if (passSelection.lowerEl===false && passSelection.upperEl===false && passSelection.numberEl===false && passSelection.symbolEl===false) {
    alert("Please choose at least one of the options after length.")
}

//function that takes variables and options and generates a random password
    //1- make array with the characters for the options that are accepted
    
    let upperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let lowerCase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let number= [0,1,2,3,4,5,6,7,8,9];
    let symbol= ["~","@", "#","$","%","^","&","*","?","<",">"];
      

    //2- make new array to push randomly at least one character from the selected options arrays
    let hasSymbol = symbol[Math.floor(Math.random() * symbol.length)];
    let hasNumber = number[Math.floor(Math.random() * number.length)];
    let hasLower = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    let hasUpper = upperCase[Math.floor(Math.random() * upperCase.length)];

if(upperEl===true) {    
    console.log(hasUpper)
} else {
    //remove from options
}
if(lowerEl===true){    
    console.log(hasLower)
} else {
    //remove from options
}
if(numberEl===true){   
    console.log(hasNumber)
} else {
    //remove from options
}
if(symbolEl===true){    
    console.log(hasSymbol)
}

    //3- push randomly according to length in a loop to a new array
    
let finalPassword = {
    hasUpper: hasUpper,
    hasLower: hasLower,
    hasNumber: hasNumber,
    hasSymbol: hasSymbol
}
for (let i = 0; i === lengthEl; i++){
 console.log(finalPassword[i])
}


}
//return password to HTML password text area

