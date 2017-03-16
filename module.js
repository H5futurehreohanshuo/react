/* module.js */

/*window.onload = () => {
	var oBox = document.getElementById('root');
	console.log(oBox);
	oBox.onclick = () => {
		oBox.style.backgroundColor = '#f66';
	};
}

var json = {
	a : 1,
	b : 2,
	show : () => {
		alert(this.a);
	}
};
json.show();

var show = ()=> {
	console.log(arguments);
}

show(1,23,4);*/

/*var person = {
	name : 'hanshuo',
	age : 16,
	showName : function () {
		alert(this.name);
	},
	showAge : function () {
		alert(this.age);
	}
}

person.showName();

var name = 'bbb';
var age = 10;
var person = {
	name,
	age,
	showName(){
		return this.name
	}
}

alert(person.showName());

function Person (name,age) {
	this.name = name;
	this.age = age;
}

Person.prototype.showName = function () {
	return this.name;
}

Person.prototype.showAge = function () {
	return this.age;
}

var per = new Person('hanshuo',12);

alert(per.showName());

class Person {
	constructor (name, age) {
		this.name = name;
		this.age = age;
	}
	showName () {
		return this.name
	}
}

var pr = new Person('aaa',12);
var pr2 = new Person('bbb',12);
//alert(pr2.showName == pr.showName);*/

/*class Person {
	constructor (name='hanshuo', age) { // 添加默认值
		this.name = name;
		this.age = age;
	}
	showName () {
		return this.name
	}
}

var pr = new Person();

alert(pr.showName());

function Person (name='hanshuo',age) {
	this.name = name;
	this.age = age;
}

Person.prototype.showName = function () {
	return this.name;
}

Person.prototype.showAge = function () {
	return this.age;
}

var per = new Person('hanshuo',12);

function Worker(name,age) {
	Person.apply(this,arguments);
}

Worker.prototype = new Person();

var w1 = new Worker();

alert(w1.showName());

// alert(per.showName());

class Person {
	constructor (name, age) {
		this.name = name;
		this.age = age;
	}
	showName () {
		return this.name
	}
}

//继承
class Worker extends Person {
	constructor (name, age, job='IT') {
		super(name, age);
		this.job = job;
	}
	showJob () {
		return this.job;
	}
}


var pr = new Person('aaa',12);
var w1 = new Worker('mmm',33);
alert(w1.showJob());*/

/*class Queue {
	constructor (content=[]) {
		this._queue = [...content];
	}
	shift () {
		const value = this._queue[0];

		this._queue.shift();

		return value;
	}
	push (n) {
		this._queue.push(n);
		return this._queue.length;
	}
}

var q = new Queue([1,2,3,4]);
q.shift();
q.push(5);
console.log(q._queue);*/

class Tab {
	constructor (id) {
		this.id = document.getElementById(id);
		this.oBtn = this.id.getElementsByTagName("input");
		this.oDiv = this.id.getElementsByTagName('div');
		this.init();
	}
	init () {
		for (let i = 0 , len = this.oBtn.length ; i < len ; i++) {
			this.oBtn[i].onclick = ()=> {
				this.hide();
				this.show(i);
			};
		}
	}
	hide () {
		for (let i = 0 , len = this.oDiv.length ; i < len ; i++) {
			this.oBtn[i].className = '';
			this.oDiv[i].style.display = 'none';
		}
	}
	show (i) {
		this.oBtn[i].className = 'on';
		this.oDiv[i].style.display = 'block';
	}
}

// 继承

class Tab2 extends Tab{
	constructor (id) {
		super(id);
		this.iNow = 0;
	}
	next () {
		this.iNow ++;
		if (this.iNow >= 3) {
			this.iNow = 0;
		}
		this.hide();
		this.show(this.iNow);
	}
}

// 继承

class Tab3 extends Tab {
	constructor (id) {
		super(id);
		this.iNow = 0;
		this.autoPlay();
	}
	next () {
		this.iNow ++;
		if (this.iNow >= 3) {
			this.iNow = 0;
		}
		this.hide();
		this.show(this.iNow);
	}
	autoPlay () {
		setInterval(() => {
			this.next();
		},1000)
	}
}

var tab = new Tab('box');
var tab2 = new Tab2('box2');
document.onclick = () => {
	tab2.next();
}
var tab3 = new Tab3('box3');


















