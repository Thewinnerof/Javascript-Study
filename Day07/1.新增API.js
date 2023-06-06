// 箭头函数
let func = (x, y) => x + y;
console.log(func(1, 2)); // 3

// 解构赋值
let [a, b] = [1, 2];
let { name, age } = { name: "John", age: "30" };

// 展开操作符
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Promise
let promise = new Promise((resolve, reject) => {
	setTimeout(function () {
		resolve("Success");
	}, 1000);
});

promise.then((value) => console.log(value)); // Success

// set / map
let set = new Set([1, 2, 3]);
set.add(4);
set.has(1); // true
console.log(set);

let map = new Map();
map.set('name', 'John');
map.get('name'); // John

console.log(map);