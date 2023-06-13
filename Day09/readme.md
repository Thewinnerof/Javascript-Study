## 安装

npm install mockjs

## 使用

```javascript
var Mock = require("mockjs");
var data = Mock.mock({
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	"list|1-10": [
		{
			// 属性 id 是一个自增数，起始值为 1，每次增 1
			"id|+1": 1,
		},
	],
});
// 输出结果
console.log(JSON.stringify(data, null, 4));
```

## 安装 bower

```
npm install -g bower
bower install --save mockjs
```

### Random 随机

Mock.Random 提供的完整方法（占位符）如下：

| Type  |                                        Method                                         |
| :---: | :-----------------------------------------------------------------------------------: |
| Basic | boolean, natural, integer, float, character, string, range, date, time, datetime, now |
| Image |                                   image, dataImage                                    |

Type Method
Basic boolean, natural, integer, float, character, string, range, date, time, datetime, now
Image image, dataImage
Color color
Text paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle
Name first, last, name, cfirst, clast, cname
Web url, domain, email, ip, tld
Address area, region
Helper capitalize, upper, lower, pick, shuffle
Miscellaneous guid, id
