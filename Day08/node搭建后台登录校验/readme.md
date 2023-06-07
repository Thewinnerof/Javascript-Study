(参考文献)[https://juejin.cn/post/7189164529430265912]

```
node Express搭建接口
├─ 1. 安装
│  ├─ 安装node.js，准备node环境
│  ├─ 创建新文件夹，运行 npm init -y  创建package.json
│  ├─ 运行 yarn add nodemon -D（自动重启工具）
│  ├─ 在package.json的scripts中增加 "dev":"nodemon app.js",
│  ├─ 运行 yarn add express  安装express
│  ├─ 项目根目录新建 app.js
│  └─
├─ 2. 路由
│  ├─ 2.1 根目录创建controllers文件夹，专门存放路由回调
│  ├─  ├─ loginController.js                                                登录逻辑
│  ├─  ├─ userController.js                                                 用户逻辑
│  ├─  └─
│  └─
│  ├─ 2.2 根目录创建routes文件夹，专门存放路由
│  ├─  ├─ login.js                                                      登陆路由
│  ├─  ├─ user.js                                                       用户路由
│  ├─  ├─ index.js                                                      路由出口
│  ├─  └─
│  └─
│  3. body-parser 第三方库
│  ├─ 3.1 新增app.js            
│  ├─  ├─ body-parser目前不支持解析contentType: multipart/form-data 的格式类型
│  ├─  ├─ post请求
│  ├─  ├─ json传数据
│  ├─  ├─
│  ├─  └─
│  └─
│  4. 解决跨域 cors
│  ├─ 4.1 安装
│  ├─  ├─ yarn add cors
│  ├─  ├─ 
│  ├─  └─
│  └─
│  5. express 链接数据库
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  └─
│  └─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  └─
│  └─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  └─
│  └─
```
