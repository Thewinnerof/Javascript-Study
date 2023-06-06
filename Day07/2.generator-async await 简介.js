// ES6 中引入了 Generator 函数和 Async/Await,用于简化异步编程。

// Generator 函数:
// - 使用 function* 定义,可以暂停执行和恢复执行。
// - 使用 yield 关键字暂停 Generator 函数的执行并返回遍历值。
// - 调用时使用迭代器进行遍历。

function* generatorFunc() {
	console.log("Start");
	const x = yield "Hello";
	console.log(x);
	const y = yield "World";
	console.log(y);
}

const iterator = generatorFunc();
console.log(iterator.next().value);
console.log(iterator.next("Hi").value);

// Async/Await:
// - 基于 Generator 函数和 Promise 实现。
// - 使用 async 定义异步函数,await 关键字暂停异步函数的执行并等待 Promise 的结果。
// - 使异步代码看起来像同步代码,简化异步编程

// async / await

async function MyFunc() {
	const result = await otherFunction();
	console.log(result);
}


// Async/Await 的优点:
// - 语义更清晰,像写同步代码一样写异步代码。
// - rejection 可以用 catch 捕捉,更符合期望。
// - 执行更清晰,避免了回调地狱。
// Generator 函数让我们可以更灵活的控制函数的执行流程。Async/Await 基于此实现,提供了一种更清晰的写法来编写异步代码。
