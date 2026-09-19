// function isPalindrome(str) {
//   const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//   const reversedStr = formattedStr.split("").reverse().join("");

//   return formattedStr === reversedStr;
// }

function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let reversedFormattedStr = "";

  for (let i = formattedStr.length - 1; i >= 0; i--) {
    reversedFormattedStr += formattedStr[i];
  }

  return formattedStr === reversedFormattedStr;
}

module.exports = isPalindrome;
