// Assignment code here
var lwrCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uprCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numSet = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ' ', '`', '~', '?', '<', '>', ';', ':', ',', '.', '[', ']', '{', '}', '"'];

var useLwrCase = false;
var useUprCase = false;
var useNumSet = false;
var useSpecChar = false;
var passWd = "";
var passLen;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "Your generated password is: \n" + password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  passLength();
  charSetsUsed();
  writePassword();
});

//Password length function
function passLength() {
  passLen = window.prompt("Enter the length of password you require (as a whole number): ");
  if (isNaN(passLen) || passLen === null) {
    window.alert("Please enter only a positive integer number");
    passLength();
  } else if (passLen < 8 || passLen > 128) {
    window.alert("Please enter a number of at least 8 and less than 128.");
    passLength();
  } else {
    return;
  }
}

//Characters to use function
function charSetsUsed() {
  var confirmLwr = window.confirm("Do you want to include lower case characters? \nChoose OK for yes, Cancel for no.");
  if (confirmLwr) {
    useLwrCase = true;
  } else {
    useLwrCase = false;
  }

  var confirmUpr = window.confirm("Do you want to include upper case characters? \nChoose OK for yes, Cancel for no.");
  if (confirmUpr) {
    useUprCase = true;
  } else {
    useUprCase = false;
  }

  var confirmNum = window.confirm("Do you want to include numbers? \nChoose OK for yes, Cancel for no.");
  if (confirmNum) {
    useNumSet = true;
  } else {
    useNumSet = false;
  }

  var confirmSpec = window.confirm("Do you want to include special characters? \nChoose OK for yes, Cancel for no.");
  if (confirmSpec) {
    useSpecChar = true;
  } else {
    useSpecChar = false;
  }

  if (confirmLwr === false && confirmUpr === false && confirmNum === false && confirmSpec === false) {
    window.alert("Please choose to include at least one character set.");
    charSetsUsed();
  } else {
    return;
  }
}

function generatePassword() {
  //Reset any saved passwords
  passWd = "";
  //If statements based on which char sets to use
  
  //All sets chosen
  for (var i = 0; i < parseInt(passLen); i++) {
    var addedChar = Math.floor(Math.random() * 4);
    switch (addedChar) {
      case 0:
        var arrayEntry = Math.floor(Math.random()*lwrCase.length);
        var charAdd = lwrCase[arrayEntry];
        passWd = charAdd.concat(passWd);
        break;
      case 1:
        var arrayEntry = Math.floor(Math.random()*uprCase.length);
        var charAdd = uprCase[arrayEntry];
        passWd = charAdd.concat(passWd);
        break;
      case 2:
        var arrayEntry = Math.floor(Math.random()*numSet.length);
        var charAdd = numSet[arrayEntry];
        passWd = charAdd.concat(passWd);
        break;
      case 3:
        var arrayEntry = Math.floor(Math.random()*specChar.length);
        var charAdd = specChar[arrayEntry];
        passWd = charAdd.concat(passWd);
        break;
    }
  }
  return passWd;
}



//No lower case

//No upper case

//No numbers

//No special chars

//No lower and upper case

//No lower and number