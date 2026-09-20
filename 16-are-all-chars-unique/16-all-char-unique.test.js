const areAllCharacterUnique = require("./16-all-char-unique");

test("", () => {
  expect(areAllCharacterUnique("abcdef")).toBe(true);
  expect(areAllCharacterUnique("abcdefgA")).toBe(true);
  expect(areAllCharacterUnique("programming")).toBe(false);
  expect(areAllCharacterUnique("")).toBe(true);
  expect(areAllCharacterUnique("a")).toBe(true);
});
