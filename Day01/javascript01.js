// 输出内容
// document.write("向body标签内写入内容")

// 写入到控制台
console.log(123);

// 定义一个函数
function myFunction(a, b) {
	// return a * b;
	console.log(a * b);
}

a = 5;
b = 6;
myFunction(a, b);

// html 文本输出内容 - innerHtml

// 作用域

// 显式函数绑定
var person1 = {
	fullName: function () {
		console.log(this.firstName + " " + this.lastName);
	},
};

var person2 = {
	firstName: "Mike",
	lastName: "Angle",
};

person1.fullName.call(person2); // Mike Angle

// 局部变量

// 这里不可以使用carName变量
function myFunction1() {
	var carName = "Volvo";
	// 这里可以使用carName变量
}
try{
	console.log(carName);
}catch{
	console.log("此处调用变量carName错误");
}
// 这里不可以使用carName变量
