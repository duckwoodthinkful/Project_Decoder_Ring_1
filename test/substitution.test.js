// substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
// substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
  it("should return false because alphabet is short", () => {
    const actual = substitution("Krebs", "Abe");
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("should return false because alphabet is not unique", () => {
    const actual = substitution("Krebs", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("'thinkful' should return 'jrufscpw'", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'jrufscpw';
    expect(actual).to.eql(expected);
  });
  
  it("'thinkful' should equal 'Thinkful'", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  });

  it("'You are an excellent spy' should return 'elp xhm xf mbymwwmfj dne'", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'elp xhm xf mbymwwmfj dne';
    expect(actual).to.eql(expected);
  });

  it("'jrufscpw' decoded should return 'thinkful'", () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = 'thinkful';
    expect(actual).to.eql(expected);
  });

  it("'message' should return 'y&ii$r&'", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = 'y&ii$r&';
    expect(actual).to.eql(expected);
  });

  it("'y&ii$r&' decoded should return 'message'", () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = 'message';
    expect(actual).to.eql(expected);
  });


});
