const express = require("express");
const routes = require("./routes"); //新增
const app = express();



var myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);


app.use("/", routes); //新增

//删除
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(4000, () => {
  console.log("server is running");
});
