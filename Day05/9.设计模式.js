// 设计模式是软件开发中反复出现的解决问题的可重用模板。掌握设计模式可以帮助我们设计出松耦合、可扩展、可重用的代码。

// 1. 单例模式 确保一个类只有一个实例,并提供一个全局访问点
class Singleton {
	constructor() {
		// 检查实例是否存在
		if (Singleton.instance) {
			return Singleton.instance;
		} else {
			console.log(11);
		}

		Singleton.instance = this;
	}
	// 其他业务逻辑
	somMethod() {}
}

let instance1 = new Singleton();
let instance2 = new Singleton();
console.log(instance1 === instance2);
