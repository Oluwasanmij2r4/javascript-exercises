const sumAll = function (a, b) {
  let sum = 0;

  //  if (typeof a !== "number" || typeof b !== "number") {
  //    return "ERROR";
  //  }

   if (a < 0 || b < 0) {
     return "ERROR";
   }

   if (!Number.isInteger(a) || !Number.isInteger(b)) {
     return "ERROR";
   }

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  for (let i = a; i <= b; i++) {
    sum += i;
  }
return sum;
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
