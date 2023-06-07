const mysql = require("../db/mysql");
const userService = require("../db/service/useService");

exports.list = function (req, res) {
	res.json({
		// 发送json数据类型
		list: [
			{ id: 1, name: "Mike" },
			{ id: 2, name: "Anthony" },
			{ id: 3, name: "John" },
		],
	});
};

exports.deleteUser = function (req, res) {
	res.send("Got a Delete request at /user");
};

exports.getUser = function (req, res) {
	mysql.query(userService.userAll).then((data) => {
		let jsonData = JSON.parse(JSON.stringify(data));
		res.json({
			data: jsonData,
		});
	});
};
