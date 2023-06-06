const express = require("express");
// const cors = require("cors");

const app = express();

// 使用 CORS 中间件
// app.use(
// 	cors({
// 		origin: ["http://localhost:3000"],
// 		headers: ["X-Requested-With"],
// 	})
// );

// 定义端口
const port = 3000;

// 定义示例用户数据
let users = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Jane" },
];

app.options("/users", (req, res) => {
	res.status(200).end();
});

// 获取所有用户
app.get("/users", (req, res) => {
	res.json(users);
});

// 获取指定用户
// app.get("/users/:id", (req, res) => {
// 	const user = users.find((u) => u.id === parseInt(req.params.id));
// 	res.json(user);
// });

// 添加新用户
// app.post("/users", (req, res) => {
// 	const user = {
// 		id: users.length + 1,
// 		name: req.body.name,
// 	};
// 	users.push(user);
// 	res.json(user);
// });

// 启动服务器
app.listen(port, () => console.log(`Server running on port ${port}`));
// 这个示例中:
// - 使用 Express 初始化一个app
// - 定义文章数据 articles 作为数据库
// - 定义路由获取所有文章和获取指定文章
// - 定义路由新增一篇文章
// - 监听端口3000,启动服务器
// 你可以发送如下请求测试这个 API:
// 获取所有文章:
// GET /articles
// 获取 id 为 1 的文章:
// GET /articles/1
// 新增一篇文章:
// POST /articles
// {
//   "title": "Article 3",
//   "content": "Content 3"
// }
