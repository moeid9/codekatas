const check = require("./odd_or_even");

describe("Check odd_or_even", () => {
  it("should return 'even' if number is even", () => {
    expect(check(2)).toBe("even");
  });
  it("should return 'odd' if number is odd", () => {
    expect(check(3)).toBe("odd");
  });
});
