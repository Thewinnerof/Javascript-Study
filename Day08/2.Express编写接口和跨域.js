const express = require("express");
const app = express();

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.get("/api/data", (req, res) => {
	const data = { message: "Hello, World" };
	res.json(data);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})
