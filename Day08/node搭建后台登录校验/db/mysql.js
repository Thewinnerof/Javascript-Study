const mysql = require("mysql");
const pool = mysql.createPool({
	connectionLimit: 10,
	host: "localhost",
	port: 3306,
	user: "root",
	password: "toor123",
	database: "mysql",
});

class Mysql {
	constructor() {}
	query(sql) {
		return new Promise((resolve, reject) => {
			pool.getConnection(function (err, connection) {
				if (err) {
					reject(err);
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
