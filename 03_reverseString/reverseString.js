const reverseString = function (word) {
  const text = word.split("").reverse();
  const result = text.join("");
  return result;
};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.");
reverseString("");

// Do not edit below this line
module.exports = reverseString;
