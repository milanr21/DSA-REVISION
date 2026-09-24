const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((item) => item * 2);

// Satisfies the certain condition

const numberGreater = numbers.filter((item) => item > 2);

// reduce

const sum = numbers.reduce((total, sum) => total + sum, 0);

// forEach: iterates through each element in an array and applies a function without creating a new array

// const iterateNum = numbers.forEach((item = item * 4));

// find: returns the first element that satisfies the given  condition

// const foundNumber = numbers.find((item) => item > 2);

// some; check if one element satisfies the given condition

// const hasEvenNumber = numbers.some((item) => item > 5);

// every: check if all array elements satisfy a condition

// const allNumGreaterThanZero = numbers.every((num) => num > 0);
