const findMissingLetter = require("./15-find-missing-letter");

test("Find missing number", () => {
  expect(findMissingLetter(["a", "c", "d", "e"])).toBe("b");
  expect(findMissingLetter(["X", "Z"])).toBe("Y");
  expect(findMissingLetter(["m", "n", "o", "q", "r"])).toBe("p");
  expect(findMissingLetter(["F", "G", "H", "J"])).toBe("I");
});
