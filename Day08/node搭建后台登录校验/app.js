const express = require("express");
const routes = require("./routes");
const app = express();

app.use("/", routes); // 新增

// app.get("/", (req, res) => {
// 	res.send("Hello world");
// });

app.listen(4000, () => {
	console.log("Server is running on the port 4000");
});
