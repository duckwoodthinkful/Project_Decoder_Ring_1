// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    // Validate the alphabet meets criteria
    if (!verifyAlphabet(alphabet)) return false;

    let output = "";
    let code = 0;
    for (let i = 0; i < input.length; i++) {
      if (encode) {
        // =========ENCODE=========
        code = input.toLowerCase().charCodeAt(i); // convert to lower case and get ascii code
        if (code > 96 && code < 123) output += alphabet.charAt(code - 97);  // if our code is between a - z, get the corresponding substitution character
        else output += input[i];  // not between a - z so just put the special character or space here.
      } else {
        // ==========DECODE==========
        code = alphabet.indexOf(input[i]) + 97; // find location in alphabet of the character and convert to ascii character code
        if (code > 96 && code < 123) output += String.fromCharCode(code); // check for a - z and put into string
        else output += input[i]; // otherwise just put original special character or space
      }
    }
    return output;
  }

  function verifyAlphabet(alphabet) {
    // does alphabet exist
    if (alphabet === undefined) return false;
  
    // Check if alphabet has 26 characters
    if (alphabet.length != 26) return false;
  
    // Check for unique characters, this might be done with an object rather than nested loop.
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) return false;
      }
    }
    return true;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
