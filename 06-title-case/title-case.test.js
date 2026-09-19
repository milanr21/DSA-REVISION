const titleCase = require("./title-case");

test("Converting string into title case", () => {
  expect(titleCase("hello world")).toBe("Hello World");
  expect(titleCase("this is a great place")).toBe("This Is A Great Place");
  expect(titleCase("i love programming and driving")).toBe(
    "I Love Programming And Driving"
  );
});
