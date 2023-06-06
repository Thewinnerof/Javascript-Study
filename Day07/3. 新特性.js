// 1. Proxy 用于对象代理，可对于目标对象的读取、函数调用等操作拦截并自定义处理
let obj = { name: "Mike" };
let proxy = new Proxy(obj, {
	get: function (target, prop) {
		return prop in target ? target[prop] : "default";
	},
});

console.log(proxy.name);
console.log(proxy.age);

// 2. Reflect 与 Proxy 相对应,用于对对象的操作进行反射。主要用于 Proxy 代理的默认实现。
let proxy1 = new Proxy(obj, {
	get: function (target, prop) {
		return Reflect.get(target, prop);
	},
});

console.log(proxy1);

// 3. Map
let map = new Map();
map.set("name", "john");
console.log(map.get("name"));

// 4. Set 一种存储不重复的值的数据结构
let set = new Set([1, 2, 3, 4]);
console.log(set.add(4));
console.log(set.has(1));
console.log(set.size);

// 5. Symbol 一种新的原始数据类型，用于唯一标识
let s1 = Symbol();
let s2 = Symbol();

console.log(s1 === s2);  // false
