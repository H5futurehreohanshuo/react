const fs = require('fs');

fs.readFile('index123.html',function (err, data) {
	var p1 = new Promise (function (resolve, reject) {
		if (err) {
			reject(err);
		} else {
			resolve(data);
		}
	});

	p1.then(function (value) { // 成功的执行函数
		console.log(value.toString());
	},function (value) { // 失败的执行函数
		console.log(value);
	});
});

