## JavaScript 笔记 📚

Pink老师

```text
├─ javascript01.js   
│  ├─       
│  ├─ getElementById("{选择的id元素}").innerHTML="{写入的内容}"      # 写入到某个id元素中    
│  ├─ var                                                            # var 声明JavaScript变量
│  ├─ 数据类型
│  ├─  ├─ typeof                                                        # 检测变量类型
│  ├─  ├─ new                                                           # 声明变量类型
│  ├─  ├─ 
│  ├─  ├─ 
│  ├─  ├─ 
│  ├─  ├─ 
│  ├─  ├─ 
│  ├─  ├─ 
│  ├─ 对象
│  ├─ 作用域 
│  ├─  ├─ 作用域为可访问变量，对象，函数的集合；作用域在函数内可修改。
│  ├─ HTML事件列表 - DOM事件        https://www.runoob.com/jsref/dom-obj-event.html
│  ├─  ├─ onchange                  HTML元素改变
│  ├─  ├─ onclick                   用户点击HTML元素
│  ├─  ├─ onmouseover               用户鼠标指针移动到某个元素上触发
│  ├─  ├─ onmouseout                用户鼠标指针离开某个元素触发
│  ├─  ├─ onkeydown                 用户按下键盘按键
│  ├─  ├─ onload                    浏览器已完成页面加载
│  ├─ 字符串                        https://www.runoob.com/jsref/jsref-obj-string.html
│  ├─  ├─ .length                   字符串长度
│  ├─  ├─ .constructor              返回创建字符串属性的函数
│  ├─  ├─ .prototype                允许您向对象添加属性和方法
│  ├─ switch 语句                   基于不同的条件来z
│  ├─ for循环                       for (var i=0; i<5; i++)
│  ├─ 类型转换
│  ├─  ├─ Number()                  转为数字
│  ├─  ├─ String()                  转为字符串
│  ├─  ├─ Boolean()                 转为布尔值
│  ├─  ├─ toString()                数字可转为字符串
│  ├─ 正则表达式
│  ├─  ├─ search()                  字符串参数作为表达式
│  ├─  ├─ replace()                 不区分大小写将字符串替换
│  ├─  ├─ RegExp                    RegExp对象是一个预定义了属性和方法的正则表达式         
│  ├─  ├─ test()                    用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。
│  ├─  ├─ exec()                    用于检索字符串中的正则表达式的匹配
│  ├─ JavaScript 错误 throw / try / catch
│  ├─  ├─ try                       测试代码块的错误
│  ├─  ├─ catch                     语句处理错误
│  ├─  ├─ throw                     创建自定义错误
│  ├─  ├─ finally                    try和catch语句之后，无论是否有触发异常，该语句都会执行
│  ├─ 显式函数绑定  
│  ├─  ├─  apply 和 call 就是函数对象的方法，允许切换函数执行的上下文环境（context），即 this 绑定的对象。
│  ├─  └─
│  └─
│  
├─ ES6
│  ├─ 新增两个关键字：let / const
│  ├─  ├─ let                       声明的变量只能在let命令所在块有效        
│  ├─  ├─ const                     声明一个只读的常量，一旦声明，常量的值不能修改
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─

│  ├─  ├─



│  ├─  ├─



├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ directives          # 全局指令文件
│  ├─ enums               # 项目常用枚举
│  ├─ hooks               # 常用 Hooks 封装
│  ├─ languages           # 语言国际化 i18n
│  ├─ layouts             # 框架布局模块
│  ├─ routers             # 路由管理
│  ├─ stores              # pinia store
│  ├─ styles              # 全局样式文件
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 常用工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 项目主组件
│  ├─ main.ts             # 项目入口文件
│  └─ vite-env.d.ts       # 指定 ts 识别 vue
├─ .editorconfig          # 统一不同编辑器的编码风格
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.cjs          # Eslint 校验配置文件
├─ .gitignore             # 忽略 git 提交
├─ .prettierignore        # 忽略 Prettier 格式化
├─ .prettierrc.cjs        # Prettier 格式化配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.cjs       # stylelint 样式格式化配置
├─ CHANGELOG.md           # 项目更新日志
├─ commitlint.config.cjs  # git 提交规范配置
├─ index.html             # 入口 html
├─ LICENSE                # 开源协议文件
├─ lint-staged.config.cjs # lint-staged 配置文件
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.cjs     # postcss 配置
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 全局配置文件
```

