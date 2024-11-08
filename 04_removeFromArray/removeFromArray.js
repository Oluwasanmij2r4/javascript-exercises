// const removeFromArray = function(array,value) {
//     let index = array.indexOf(value);
//     while(index !== -1){
//         array.splice(index,1);
//         index = array.indexOf(value)
//     }
//     return array
// };

const removeFromArray = function (array, ...value) {
 return array.filter(v => !value.includes(v));
};

// const removeFromArray = function (array, value) {
//   return array.filter(v => {
//     return !value.includes(v);
// })
// };

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 2, 3], 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
