const mysql = require("mysql");
const pool = mysql.createPool({
	connectionLimit: 10,
	host: "localhost",
	port: 3306,
	user: "admin",
	password: "admin123",
	database: "expressApi",
});

class Mysql {
	constructor() {}
	query(sql) {
		return new Promise((resolve, reject) => {
			pool.getConnection(function (err, connection) {
				if (err) {
					reject(err);
					console.log("连接错误");
					throw err; // not connected!
				}
				connection.query(sql, function (error, results, fields) {
					if (error) {
						reject(err);
						throw error;
					}
					connection.release(); //只是释放链接，在缓冲池，没有被销毁
					resolve(results);
				});
			});
		});
	}
}

module.exports = new Mysql();
