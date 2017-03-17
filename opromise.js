/*var p1 = new Promise (function (resolve,rejected) {
	if (true) {
		resolve(1);
	} else {
		rejected(2);
	}
});

p1.then(function (value) {
	console.log(value);
	return value + 1;
},function (value) {
	console.log(value);
}).then(function (value) {
	console.log(value);
});

let ajax = (url, fnSucc, fnFail) => {
	let oAjax = new XMLHttpRequest();
	oAjax.open('GET', url, true);
	oAjax.send();
	oAjax.onload = () => {
		if (oAjax.readyState == 4 && oAjax.status == 200) {
			fnSucc(oAjax.responseText);
		} else {
			fnFail(oAjax.status);
		}
	}
}

let oBtn = document.getElementById('btn');
let oBox = document.getElementById('box');
oBtn.onclick = ()=>{
	let p1 = new Promise(function (resolve,reject) {
		ajax('a.txt',function (str) {
			resolve(str);
		},function (str) {
			reject(str);
		});
	});
	p1.then(function (str) {
		oBox.innerHTML = str;
	},function (str) {
		oBox.innerHTML = str;
	});

};

var p1 = new Promise(function (resolve, reject) {
	resolve('成功了');
});

p1.then(function (value) {
	console.log(value);
	throw '发生错误了';
}).catch(function (e) {
	console.log(e);
});

var p1 = Promise.resolve(3);
var p2 = Promise.reject(5);

Promise.all([p2,p1]).then(function (value) {
	console.log(value);
},function (value) {
	console.log('error:'+value);
});


var p1 = new Promise(function (resolve, reject) {
	setTimeout(resolve,500,'one');
});

var p2 = new Promise(function (resolve, reject) {
	setTimeout(resolve,100,'two');
});

Promise.race([p1,p2]).then(function (value) {
	console.log(value);
},function (value) {
	console.log(value);
});

Promise.resolve('这是成功的信息').then(function (value) {
	console.log(1);
},function (value) {
	console.log(2);
});

var p1 = Promise.resolve(3);
var p2 = Promise.resolve(p1).then(function (value) {
	console.log(value);
},function (value) {
	console.log(value);
});*/

/************************************generator函数**********************************************************************/

/*function* gen(x){
  var y = yield x + 2;
  return y;
}


var g = gen(1);

console.log(g.next());*/




























