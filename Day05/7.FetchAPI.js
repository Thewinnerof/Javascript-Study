// Fetch API 是原生 JS 中用来替代 AJAX 的 API,可以轻易的实现跨域请求。
// 使用 Fetch 基本步骤:
// 1. fetch(url) 发送请求
// 2. then() 处理响应成功状态,返回 Response 对象
// 3. 调用 Response 对象的 json() 方法将结果解析为 JSON
// 4. catch() 处理响应失败状态

fetch("https://www.fastmock.site/mock/8ca241102355210b9bceb556d296490f/base/gender")
	.then((response) => {
		console.log(response.json);
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

// 相比 AJAX,Fetch API 的优点在于:
// - 语法更简洁
// - 内置支持 Promise,避免回调地狱
// - 支持将其他类型响应解析为 text()、json()、formData() 等
// - 支持请求和响应中断
// - 支持请求超时设置
// - 支持 CORS 跨域请求
// 综上,AJAX 与 Fetch API 都用于实现前后端异步通信, Fetch API 是更现代的方式,语法更简洁,功能也更强大。但目前 Fetch API 兼容性略差,老旧浏览器可能需要 polyfill 支持。
// 所以在实际开发中,可以:
// - 如果要考虑兼容性,使用 AJAX
// - 如果仅面向现代浏览器,使用 Fetch API
// - 也可以同时使用两者,并在 Fetch API 不支持的浏览器下降级到 AJAX
