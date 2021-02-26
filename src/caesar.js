// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // Check for shift
    if (!shift) return false;

    // Verify shift is valid
    if ((shift < -25) || (shift >25) || (shift==0)) return false;
    let output = '';
    let code = 0;

    // Keep track of encode or decode
    const direction = encode ? 1:-1;

    // Loop through input string
    for (let i = 0; i< input.length; i++)
    {
      // Get ascii code value after making lower case
      code = input.toLowerCase().charCodeAt(i);
      // check is is between a - z
      if (code > 96 && code <123)
      {
        // shift the proper direction
        code += (direction * shift);
        if (code >122)
          code -=26;  // exceeded z, shift back by length of alphabet
        else if (code<97)
          code += 26; // exceeded a, shift forward by length of alphabet
      }
      // put our shifted letter into the output string
      output+=String.fromCharCode(code);
    }  
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
