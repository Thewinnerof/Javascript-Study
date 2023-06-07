const express = require("express");
const routes = require("./routes");

// 新增解决跨域cors
const cors = require("cors");

// 新增body-parse第三方库
const bodyParser = require("body-parser");

var myLogger = function (req, res, next) {
	console.log("LOGGED");
	next();
};

const app = express();

app.get("/", (req, res) => {
	res.send("Hello world");
});

// 中间件是个函数，有三个参数 req，res，next
// 若非结束响应，中间件必须调用 next() 将控制传递给下一个中间件函数（否则请求将成为悬挂请求）
app.use(myLogger);


// 解析application/x-www-form-urlencoded数据格式
app.use(bodyParser.urlencoded({ extended: false }));
// 解析json数据格式
app.use(bodyParser.json());
//解析 text/plain 数据格式
app.use(bodyParser.text());




// 新增跨域
app.use(cors());

app.use("/", routes); // 新增

app.listen(4000, () => {
	console.log("Server is running on the port 4000");
});
