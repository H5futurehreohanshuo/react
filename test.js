/* entry.js */

require('./style.css'); // 载入 style.css

// import React from 'react';
// import {render} from 'react-dom';
// import module from './module';

// import module2 from './module2';

import aaa from './opromise';


// render(<module />, document.getElementById('root'))
/*var arr = [1,2,3];
var arr2 = arr;
arr.pop(); // 删除数组的最后一个元素并返回删除的元素
console.log(arr,arr2);*/

var arr = [1,2,3];
/*var arr2 = [];

for (var i = 0;i<arr.length;i++) {
	arr2[i] = arr[i];
}

arr.pop();*/

/*var arr2 = Array.from(arr);

arr.pop();*/

/*var arr2 = [...arr];

arr.pop();*/

/*function show (...args) {
	args.push(5);
	console.log(...args);
}

show(1,2,3,4);*/

//var arr = ['apple','banana','orange','peer'];

/*for (var i in arr) {
	console.log(arr[i]);
}*/

/*var obj = {
	a : 'apple',
	b : 'banana',
	c : 'orange',
	d : 'perr'
};

for (var i of obj) {
	console.log(i);
}*/

/*var map = new Map();
map.set('a','apple');
map.set('b','banana');
// console.log(map.get('a'));
map.delete('a');
console.log(map);

for (var a of map) {
	console.log(a);
}*/

var map = new Map();
map.set('a','apple');
map.set('b','banana');
map.set('c','orange');
map.set('d','peer');

/*for (var i of map) {
	console.log(i); // 其中i是一个数组
}*/

/*for (var [key,value] of map) {
	console.log(key, value);
}*/

/*for (var i of map.entries()) {
	console.log(i);
}

for (var i of map.keys()) {
	console.log(i);
}

for (var i of map.values()) {
	console.log(i);
}

var arr = ['apple','banana','orange','peer'];

for (var i of arr.entries()) {
	console.log(i);
}*/

/*var a = new Array(26).fill([]);
console.log(a[10]);*/

/*let obj1 = {a: {b: 1}};
let obj2 = Object.assign({}, obj1);

obj1.a.b = 2;
console.log(obj2.a.b);*/

/*var mySymbol = Symbol();

var a = {};
a[mySymbol] = 'Hello!';

console.log(a[mySymbol])*/






























