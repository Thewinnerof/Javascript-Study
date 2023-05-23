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
│  作为函数方法调用函数
│  ├─  ├─ 1. call                       [预定义的函数方法]  两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。
│  ├─  ├─ 2. apply                      [预定义的函数方法]  两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。
│  Javascript类
│  ├─  ├─ 1. constructor()                构造函数    类似 python def __init__(self):
│  ├─  ├─ 2. super()                      引用父类的构造函数方法
│  ├─  ├─ 3. getter()                     getter 使用get关键字
│  ├─  ├─ 4. setter()                     set关键字
│  ├─  ├─ 5. static                       static 静态方法
│  Dom 文档对象模型
│  ├─  ├─ 1. getElementById               
│  ├─  ├─ 2. getElementsByTagName         var y=document.getElementById("main").getElementsByTagName("p"); 找id=main的元素下的所有p元素
│  ├─  ├─ 3. getElementsByClassName       通过类名找到HTML元素
│  ├─  ├─ 4. innerHTML()                  document.getElementById(id).innerHTML=新的 HTML  更改此元素的内容
│  ├─  ├─ 5. .style.property              document.getElementById(id).style.property=新样式    [color / fontFamily / fontSize]
│  ├─  ├─ 6. onclick                      点击事件
│  ├─  ├─ 7. onload                       用户进入页面时触发
│  ├─  ├─ 8. onunload                     用户离开页面时触发
│  ├─  ├─ 9. onchange                     针对输入字段验证来使用
│  ├─  ├─ 10.onmouseover                  鼠标进入元素时触发
│  ├─  ├─ 11.onmouseout                   鼠标移出元素时触发 
│  ├─  ├─ 12.onmousedown                  鼠标被按下时触发              [可用于对元素拖动，在此事件中获取鼠标位置，在onmousemove事件中移动元素]
│  ├─  ├─ 13.onmouseup                    鼠标被释放时触发
│  ├─  ├─ 14.onfocus                      元素被获取焦点时触发
│  ├─  ├─ 15.addEventListener             点击按钮时触发监听事件    element.addEventListener(event, function, useCapture);
│  ├─  ├─ 16.removeEventListener          移除addEventListener()方法添加的事件句柄
│  ├─  ├─ 17.document.createElement("p"); 创建p标签
│  ├─  ├─ 18.document.createTextNode("这是一个新的段落。"); 创建新的文本节点
│  ├─  ├─ 19.appendChild()                将元素插入到结束位置
│  ├─  ├─ 20.insertBefore()               将元素插入到开始位置
│  ├─  ├─ 21.removeChild()                移除某个元素
│  ├─  ├─ 22.replaceChild()               替换DOM元素
│  ├─  ├─ 23.querySelectorAll()           document.querySelectorAll("p"); 获取 <p> 元素的集合
│  Javascript对象
│  ├─  ├─ 1. .length                      获取字符串长度
│  ├─  ├─ 2. toUpperCase()                小写全部转大写
│  ├─  ├─ 3. toLowerCase()                大写全部转小写
│  ├─  ├─ 4. toString()                   (16,8,2) 输出进制
│  ├─  数字方法
│  ├─  ├─ 1. parseFloat()                 转浮点数
│  ├─  ├─ 2. parseInt()                   字符串转整型数字
│  ├─  ├─ 3. isFinite()                   判断传递参数是否是有限数字
│  ├─  ├─ 4. Integer()                    判断是否是整型数字
│  ├─  ├─ 5. isNaN()                      判断传递的参数是否为 isNaN()。
│  ├─  ├─ 6. isSafeInteger()              判断传递的参数是否为安全整数。
│  ├─  ├─ 7. indexOf()                    定位字符串中某一个指定的字符首次出现的位置
│  ├─  ├─ 8. replace("Microsoft","Runoob")  Microsoft 替换成 Runoob 
│  ├─  ├─ 9. split(",")                   字符串转为数组用，号分割
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  ├─  ├─
│  └─ vite-env.d.ts       # 指定 ts 识别 vue
└─ vite.config.ts         # vite 全局配置文件
```
