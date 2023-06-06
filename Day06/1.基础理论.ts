// 接口： 定义对象的结构和类型
interface User {
	name: string;
	age: number;
}

let user: User;
user = {
	name: "John",
	age: 21,
};

console.log(user);

// 类： 基于ES6类
class Project {
	public name: string;

	constructor(name: string) {
		this.name = name;
	}
}

// 枚举： 定义一组命名常量
enum Color {
	red,
	Green,
	Blue,
}

let c: Color = Color.Green;
console.log(c);

// 泛型： 定义可重用的组件，一种在指定类型前对类型进行参数化的方法
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items);
}

let arr = getArray<number>([1, 2, 3]);
console.log(arr);
