## JavaScript 笔记 📚

Pink 老师

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
│  ├─  ├─ # 相同作用域中let不能用来重置var声明的变量；且let不能重置let声明的
│  ├─  ├─ javascript:void(0)        <a href="javascript:void(0)">单击此处什么也不会发生</a>
│  ├─  ├─
│  AJAX请求
│  ├─  ├─ responseText              获取字符串形式数据
│  ├─  ├─ responseXML               获取XML形式数据
│  ├─  ├─ readyState                0: 请求未初始化 1: 服务器连接已建立 2: 请求已接收 3: 请求处理中 4: 请求已完成，且响应已就绪
│  Promise ES6写法 异步任务
│  ├─  ├─ 1. 构造Promise对象        new Promise(function(resolve, reject){})
│  ├─  ├─ 2. 两个参数 resolve / reject         成功 / 失败
│  ├─  ├─ 3. then                      用于处理Promise成功状态的回调函数
│  ├─  ├─ 4. catch                     处理Promise失败状态的回调函数
│  ├─  ├─ 5. finally                   无论成功还是失败，都会执行的回调函数
│  async  异步函数
│  ├─  ├─ 1. await                      必须跟一个promise
│  ├─  ├─ 2. try-catch                  处理异常的机制
│  ├─  ├─
│  └─ vite-env.d.ts       # 指定 ts 识别 vue
└─ vite.config.ts         # vite 全局配置文件
```
