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
│  计时事件         🔨
│  ├─ setInterval()           间隔指定的毫秒数不停地执行指定的代码  window.setInterval("javascript function",milliseconds);
│  ├─ clearInterval()         用于停止 setInterval() 方法执行的函数代码。
│  ├─ setTimeout()            等待定义多少秒后执行第一个参数（函数）   setTimeout(function(){alert("Hello")},3000);
│  ├─ clearTimeout()          用于停止执行setTimeout()方法的函数代码。
│  ├─ 
│  └─ 
│ 
│  Cookie       用于存储 web 页面的用户信息。 [创建、读取、删除]      🔨
│  ├─ 创建cookie              document.cookie="username=John Doe";
│  └─ 
└─ 
```

参考示例： https://www.runoob.com/js/js-examples.html
