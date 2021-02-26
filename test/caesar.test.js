const { expect } = require("chai");
const caesar = require("../src/caesar");

describe("caesar", () => {
  it("should return false because shift is missing", () => {
    const actual = caesar("Krebs");
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("should return false because shift is < -25", () => {
    const actual = caesar("Krebs", -50);
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("should return false because shift is > 25", () => {
    const actual = caesar("Krebs", 35);
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("should return false because shift === 0", () => {
    const actual = caesar("Krebs", 0);
    const expected = false;
    expect(actual).to.eql(expected);
  });


  it("'thinkful' should return same as 'Thinkful'", () => {
    const actual = caesar("Thinkful", 4);
    const expected = caesar("thinkful", 4);
    expect(actual).to.eql(expected);
  });

  it("'thinkful' shift 3 should return 'wklqnixo'", () => {
    const actual = caesar("thinkful", 3);
    const expected = 'wklqnixo';
    expect(actual).to.eql(expected);
  });
    
  it("'thinkful' shift -3 should return 'qefkhcri'", () => {
    const actual = caesar("thinkful", -3);
    const expected = 'qefkhcri';
    expect(actual).to.eql(expected);
  });

  it("'z' shift 3 should wrap and return 'c'", () => {
    const actual = caesar("z", 3);
    const expected = 'c';
    expect(actual).to.eql(expected);
  });

  it("'c' shift -3 should wrap and return 'z'", () => {
    const actual = caesar("c", -3);
    const expected = 'z';
    expect(actual).to.eql(expected);
  });

  it("'wklqnixo' decoded shift 3 should return 'thinkful'", () => {
    const actual = caesar("wklqnixo", 3, false);
    const expected = 'thinkful';
    expect(actual).to.eql(expected);
  });

  // Test spaces and non alpha characters
  it("'This is a secret message!' shift 8 should return 'bpqa qa i amkzmb umaaiom!'", () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = 'bpqa qa i amkzmb umaaiom!';
    expect(actual).to.eql(expected);
  });

  it("'BPQA qa I amkzmb umaaiom!' decoded shift 8 should return 'this is a secret message!'", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = 'this is a secret message!';
    expect(actual).to.eql(expected);
  });


});
