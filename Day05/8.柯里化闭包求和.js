const add = (x) => (y) => (z) => x + y + z;

const result = add(1)(2)(3);

console.log(result); // 6

// add(1) 返回一个闭包,该闭包又返回一个闭包,最后这个闭包求和。这称为柯里化。