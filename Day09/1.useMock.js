// 安装
// npm install mockjs

// 使用 Mock
var Mock = require("mockjs");
var data = Mock.mock({
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	"list|1-10": [
		{
			// 属性 id 是一个自增数，起始值为 1，每次增 1
			"id|+1": 1,
		},
	],
});
// 输出结果
console.log(JSON.stringify(data, null, 4));

// {
//     "list": [
//         {
//             "id": 1
//         },
//         {
//             "id": 2
//         },
//         {
//             "id": 3
//         },
//         {
//             "id": 4
//         },
//         {
//             "id": 5
//         },
//         {
//             "id": 6
//         },
//         {
//             "id": 7
//         }
//     ]
// }



var random = Mock.Random;
// 随机生成邮箱地址
console.log(random.email());
// 随机生成图片地址
console.log(random.image());
// 随机生成颜色
console.log(random.color());
// 随机生成
// console.log(random.email());
// // 随机生成
// console.log(random.email());
// // 随机生成
// console.log(random.email());
// // 随机生成
// console.log(random.email());
// // 随机生成
// console.log(random.email());
// // 随机生成
// console.log(random.email());