## JavaScript 浏览器对象模型 📚


```text 
├─ 浏览器窗口尺寸 🔨
│  ├─ window.innerHeight             浏览器窗口的内部高度(包括滚动条)
│  ├─ window.innerWidth              浏览器窗口的内部宽度(包括滚动条)
│  ├─ window.open()                  打开新窗口
│  ├─ window.close()                 关闭当前窗口
│  ├─ window.moveTo()                移动当前窗口
│  ├─ window.resizeTo()              调整当前窗口的尺寸
│  └─
│  
├─ Window Screen 包含有关用户屏幕的信息 🔨
│  ├─ screen.availWidth              可用的屏幕宽度
│  ├─ screen.availHeight             可用的屏幕高度
│  └─
│  
├─ Window Location 用于获取当前页面URL  🔨
│  ├─ location.hostname              返回 web 主机的域名
│  ├─ location.pathname              返回当前页面的路径和文件名
│  ├─ location.port                  返回 web 主机的端口 （80 或 443）
│  ├─ location.protocol              返回所使用的 web 协议（http: 或 https:）
│  ├─ location.href                  返回当前页面url
│  └─ 
│  
├─ Window history 用于获取当前页面URL  🔨
│  ├─ history.back()                 与在浏览器点击后退按钮相同
│  ├─ history.forward()              与在浏览器中点击向前按钮相同
│  ├─ history.go(args)               args => [1/0/-1] 1前进页面个数 -1后退页面个数 0表示刷新页面                     
│  └─ 
│  
│  window创建三种消息框：警告框、确认框、提示框。🔨
│  ├─ window.alert()                            警告框
│  ├─ window.confirm("sometext");               通过true或false判断按下确认或取消
│  ├─ window.prompt("sometext","defaultvalue"); 用于提示用户在进入页面前输入某个值。
│  └─ 
│  
│  计时事件
│  ├─ concat()           合并数组
│  ├─ join()             数组的元素组成字符串
│  ├─ pop()              删除数组的最后一个元素
│  ├─ shift()            删除数组的第一个元素
│  ├─ push()             数组的末尾添加新的元素
│  ├─ unshift()          在数组的开头添加新元素
│  ├─ reverse()          将一个数组中的元素的顺序反转排序
│  ├─ slice()            从一个数组中选择元素
│  ├─ sort()             数组排序（按字母顺序升序）
│  ├─ splice()           在数组的第2位置添加一个元素 
│  ├─ toString()         转换数组到字符串
│  RegExp正则表达式
│  ├─ var patt=/pattern/modifiers;  
│  ├─ 修饰符
│  ├─ ├─ i              修饰符是用来执行不区分大小写的匹配 
│  ├─ ├─ g              修饰符是用于执行全文的搜索（而不是在找到第一个就停止查找,而是找到所有的匹配）。
│  ├─ ├─ match()        检测字符串是否匹配某模式；提取字符串中的信息(使用捕获组)；查找所有匹配结果(使用全局标志g)
│  ├─ ├─ test()         测试字符串是否匹配某模式,返回true或false
│  ├─ ├─ exec()         检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
│  └─ 
└─ 
```
