// 回调函数的执行依赖于异步模式和事件循环。当一个异步函数(定时器、ajax 请求等)被调用时:
// 1. 它会在内部生成一个回调函数,然后将该回调函数添加到任务队列(Job Queue)中。
// 2. 主线程继续执行后续代码,不等待这个异步函数完成。
// 3. 一旦主线程中的任务执行完毕为空,会去任务队列中取出第一个回调函数执行。
// 4. 这样,尽管异步函数内部的操作在回调函数被添加到队列后的一段时间内完成,但回调函数的执行还是必须等待主线程完成后,根据事件循环策略在适当的时机被调用。

function Text1() {
	console.log(1); // 1
	setTimeout(() => {
		console.log(2); // 3    这里回调函数的执行需要等待主线程完成后,根据事件循环机制在适当的时机被调用。
	}, 0);

	console.log(3); // 2
}

// 例子1
// Text1();

function Text2() {
	function doSomething(callback) {
		setTimeout(() => {
			callback();
		}, 0);
	}

	function callback() {
		console.log("Done");
	}

	doSomething(callback);
	console.log("Next");

	// 1. 调用 doSomething(),生成回调函数 callback 并添加到任务队列
	// 2. 打印 Next!
	// 3. 主线程为空,取出任务队列中的 callback 函数并执行,打印 Done!
}

// 例子2
Text2();



// 所以回调函数的执行必须遵循:
// 1. 异步函数将回调函数添加到任务队列
// 2. 主线程完成后,事件循环将从任务队列取出回调函数执行
// 3. 这种机制使得回调函数可以在异步操作完成后得到执行,实现了异步逻辑的处理。
