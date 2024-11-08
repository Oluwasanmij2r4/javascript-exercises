// const repeatString = function() {
//     let string = '';
//     let num;
//     for(num = 0; num < 3; num++ ){
//         string += 'hey';
//     }
//     return string
// };

// repeatString();

// const repeatString = function () {
//   let string = "";
//   let num;
//   for (num = 0; num < 10; num++) {
//     string += "hello";
//   }
//   return string;
// };

// repeatString();

const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

repeatString('hey', 3);
repeatString('hello', 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("goodbye", -1);
repeatString("odin", 20);
repeatString("", 0);

// Do not edit below this line
module.exports = repeatString;
