/* entry.js */
'use strict';

import styles from './styles/main.scss'; // 载入 style.scss

// 载入react
import React from 'react';
import {render} from 'react-dom';

// 图片数据文件
import imageData from './data/imageData.json';

// 获取图片相关的数据，利用自执行将图片名信息转成URL路径信息
let imageDatas = ((imageDatasArr=[]) => {
	for (let i = 0 , len = imageDatasArr.length ; i < len ; i ++) {
		let singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('./images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}

	return imageDatasArr;
})(imageData);

var App = React.createClass({
	render : () => {
		return (
			<section className="stage">
				<section className="img-sec"></section>
				<nav className="controller-nav"></nav>	
			</section>
		);
	}
});

render(<App />, document.getElementById('content'));