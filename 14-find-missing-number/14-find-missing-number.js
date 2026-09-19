function findMissingNumber(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  const n = arr.length + 1;

  const expectedNumber = (n * (n + 1)) / 2;

  const actualNumber = arr.reduce((sum, num) => sum + num, 0);

  return expectedNumber - actualNumber;
}

module.exports = findMissingNumber;
