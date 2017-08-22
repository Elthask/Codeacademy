function isPasswordValid(input) {
  if (!hasUpperCase(input)) {
    console.log('Password needs a capital letter');
  }
 if (!hasLowerCase(input)) {
    console.log('Password needs a lower case letter.');
  }
 if (!isLongEnough(input)) {
    console.log('Password should be at least 8 characters.');
  }
 if (!hasSpecialCharacter(input)) {
    console.log('Password should contain one special character.');
  }
  
  if (hasUpperCase(input) && hasLowerCase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
    console.log('The password is valid.');
  }
 
}

function hasUpperCase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      return true;
    } 
  }
}

function hasLowerCase(input) {
  for (var i=0; i < input.length; i++) {
    if (input[i] === input[i].toLowerCase()) {
      return true;
    }
  }
}

function isLongEnough(input) {
  for (var i=0; i < input.length; i++) {
    if (input.length >= 8) {
      return true;
    }
  }
}

function hasSpecialCharacter(input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  
  for(var i = 0; i < input.length; i++) {
    for (var j = 0; j < specialCharacters.length; j++) {
    	if (input[i] === specialCharacters[j])  {
        return true;
      }
    }
    
  }
}

isPasswordValid('FRAMSHINEDD@');
