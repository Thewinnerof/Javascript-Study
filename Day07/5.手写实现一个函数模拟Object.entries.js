// ES6 引入了 Object.entries() 方法,用于将对象的可枚举属性转换为数组。
function objectEntries(obj) {
	let entries = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			entries.push([key, obj[key]]);
		}
	}

	return entries;
}

let obj = {
	name: "Mike",
	age: 21,
};

let entries = objectEntries(obj);
console.log(entries);


// 这个函数会遍历对象 obj 的所有可枚举属性,并使用键值对的形式 Push 到 entries 数组中,最终返回这个数组。
// 与 Object.entries() 相比,这个函数有几点不同:
// 1. 只会遍历可枚举属性,而 Object.entries() 会包含不可枚举属性。
// 2. 不会检查原型链上的属性,只检查对象自己的属性。Object.entries() 会包含原型链上的可枚举属性。
// 3. 性能略差于 Object.entries() ,因为需要做 hasOwnProperty() 检查。