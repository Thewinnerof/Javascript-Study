// # 1. 接口继承
interface Windows {
	title: string;
}

interface WindowWithTsConfig extends Windows {
	tsconfig: string;
}

let src: WindowWithTsConfig = {
	title: "Hello",
	tsconfig: "tsconfig.json",
};

console.log(src); // { title: 'Hello', tsconfig: 'tsconfig.json' }

// 2. 类型别名
type Window1 = {
	titlle: string;
};

// 类型使用 & 运算符,将 Window 类型与 { tsconfig: string } 进行交叉,产生一个新类型,同时包含两个类型的成员。
type Window1extends = Window1 & {
	tsconfig: string;
};

let src1: Window1extends = {
	titlle: "Mike",
	tsconfig: "tsconfig",
};

console.log(src1); // { titlle: 'Mike', tsconfig: 'tsconfig' }


// 两种方式的最终效果是类型 WindowWithTsConfig 同时具有 Window 类型的所有成员,以及额外的 tsconfig 属性。
// 选择接口继承还是类型别名,主要根据语义来决定:
// - 接口继承更侧重于“是一种”的关系,所以更适用于实体之间的继承关系。
// - 类型别名使用 & 运算符更加灵活,可以组合多个类型,所以更适用于需要“混入”额外属性的情况。