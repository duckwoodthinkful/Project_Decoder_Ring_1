// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // We are going to use the same loop for encoding and decoding, taking different steps.
    let step = encode ? 1 : 2;
    let output = "";

    // Check to see if we have appropriate string length for decoding
    if (!encode) {
      const spaceCount = input.split(" ").length - 1;
      if ((input.length - spaceCount) % 2 != 0) return false;
    }

    // loop through the input string
    for (let i = 0; i < input.length; i += step) {
      let x = 0;
      let y = 0;
      let code = 0;
      if (encode) { // =========== ENCODE ===========
        // Get ascii code of the character
        code = input.toLowerCase().charCodeAt(i);
        // check to see if we are in the normal letter range and if not just add the character
        if (code > 96 && code < 123) {
          // take into account i/j share a spot
          if (code > 105) code -= 1;
          // calculate x and y coordinates with a little math
          x = ((code - 97) % 5) + 1;
          y = Math.floor((code - 97) / 5) + 1;
          // Put our X and Y values as strings into the output string
          output += x.toString() + y.toString();
        } else output += String.fromCharCode(code);
      } else {  // =========== DECODE ===========
        // Just add spaces and then go to next number pair in the list
        if (input[i] == " ") {
          output += " ";
          i -= 1;
          continue;
        }
        // Get the x y coordinates
        x = input[i] - 1;
        y = input[i + 1] - 1;
        // calculate an ascii code
        code = y * 5 + x + 97;
        // unfortunately we share a spot for i/j
        if (code == 105) output += "(i/j)";
        else {
          // shift letters beyond the i/j combo by one for the correct ascii code
          if (code > 105) code += 1;
          // put our character into the output string
          output += String.fromCharCode(code);
        }
      }
    }
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
