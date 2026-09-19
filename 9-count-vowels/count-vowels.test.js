const countVowels = require("./9-count-vowels");

test("Counting vowels in a string", () => {
  expect(countVowels("Hello, World!")).toBe(3);
  expect(countVowels("Javascript")).toBe(3);
  expect(countVowels("OpenAI Chatbot")).toBe(6);
});
