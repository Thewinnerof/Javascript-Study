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
