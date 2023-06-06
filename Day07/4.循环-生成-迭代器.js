// 1. 生成器
function* generatorFunc() {
	yield 1;
	yield 2;
	yield 3;
}

let iterator = generatorFunc();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

// 2. for循环
let arr = [1, 2, 3];
for (let n of arr) {
	console.log(n);
}

// 3. 迭代器模式
// 对象具有[Symbol.iterator]()方法,返回一个迭代器对象。
// 迭代器对象具有 next()方法,每次调用返回一个包含 值和done 属性的对象。

let obj = {
	data: [1, 2, 3],

	[Symbol.iterator]() {
		let index = 0;
		return {
			next: () => {
				if (index < this.data.length) {
					return { value: this.data[index++], done: false };
				} else {
					return { done: true };
				}
			},
		};
	},
};

for (let n of obj) {
	console.log(n);
}

// obj 是一个可迭代对象,通过[Symbol.iterator]()方法返回一个迭代器对象。
