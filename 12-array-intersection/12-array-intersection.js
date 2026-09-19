// Write a function called arrayIntersection that takes in two arrays and returns an array containing the intersection of the two input arrays

function arrayIntersection(arr1, arr2) {
  const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
}

module.exports = arrayIntersection;
