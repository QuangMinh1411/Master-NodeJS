// console.log(arguments);
// console.log(require("module").wrapper);

const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 4));

// const calc2 = require("./test-module-2");
// console.log(calc2.multiply(3, 7));
const { add, multiply, divide } = require("./test-module-2");
console.log(multiply(7, 9));

require("./test-module-3")();

require("./test-module-3")();
require("./test-module-3")();
