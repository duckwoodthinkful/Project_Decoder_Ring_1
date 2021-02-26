const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius", () => {
  it("should return false because not even number", () => {
    const actual = polybius("44324233521254134", false);
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("'thinkful' should return '4432423352125413'", () => {
    const actual = polybius("thinkful");
    const expected = '4432423352125413';
    expect(actual).to.eql(expected);
  });
  
  it("'Hello world' should return '3251131343 2543241341'", () => {
    const actual = polybius("Hello world");
    const expected = '3251131343 2543241341';
    expect(actual).to.eql(expected);
  });

  it("'Hello world' should equal 'hello world'", () => {
    const actual = polybius("Hello world");
    const expected = polybius("hello world");;
    expect(actual).to.eql(expected);
  });

  it("'3251131343 2543241341' decoded should return 'hello world'", () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = 'hello world';
    expect(actual).to.eql(expected);
  });

  it("'4432423352125413' decoded should return 'th(i/j)nkful'", () => {
    const actual = polybius("4432423352125413", false);
    const expected = 'th(i/j)nkful';
    expect(actual).to.eql(expected);
  });


});
