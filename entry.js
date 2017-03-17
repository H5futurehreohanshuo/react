/* entry.js */
'use strict';

import styles from './styles/main.scss'; // 载入 style.scss

// 载入react
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

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

/*
 * 获取区间内的随机值
 */
let getRangeRandom = (low, high) => {
	return Math.floor(Math.random() * (high - low) + low);
}

// 每一个图片组件
class ImgFigure extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let styleObj = {};

		// 如果props属性中指定了这张图片的位置，则使用
		if (this.props.arrange.pos) {
			styleObj = this.props.arrange.pos;
		}

		return (
			<figure className="img-figure" style={styleObj}>
				<img src = {this.props.data.imageURL}
					 alt = {this.props.data.title}/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
				</figcaption>
			</figure>
		);
	}

}

// 主组件
class App extends Component {
	constructor () {
		super();
		// 初始化位置的取值范围
		this.Constant = {
			centerPos: {
				left: 0,
				right: 0
			},
			hPosRange: { // 水平方向的取值范围
				leftSecX: [0,0],
				rightSecX: [0,0],
				y: [0,0]
			},
			vPosRange: { // 垂直方向的取值范围
				x: [0,0],
				topY: [0,0]
			} 
		}
		// 用这种方式来代替getInitialState生命周期方法
		this.state = {
			imgsArrangeArr : [
				/*{
					pos: {
						left: 0,
						top: 0
					},
					rotate: 0 // 旋转角度
				}*/
			]
		}
	}

	// 组件加载之后，为每张图片计算其位置范围
	componentDidMount () {
		//首先拿到舞台的大小
		let stageDOM = ReactDOM.findDOMNode(this.refs.stage), // 拿到section的真实DOM节点
			stageW = stageDOM.scrollWidth,
			stageH = stageDOM.scrollHeight,
			halfStageW = Math.floor(stageW / 2),
			halfStageH = Math.floor(stageH / 2);
			console.log(stageW);

		// 拿到imgFigure的大小
		var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
			imgW = imgFigureDOM.scrollWidth,
			imgH = imgFigureDOM.scrollHeight,
			halfImgW = Math.floor(imgW / 2),
			halfImgH = Math.floor(imgH / 2);

		// 计算中心位置的位置点
		this.Constant.centerPos = {
			left: halfStageW - halfImgW,
			top: halfStageH - halfImgH
		}

		// 计算水平方向的取值范围
		this.Constant.hPosRange.leftSecX[0] = -halfImgW;
	    this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
	    this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
	    this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
	    this.Constant.hPosRange.y[0] = -halfImgH;
	    this.Constant.hPosRange.y[1] = stageH - halfImgH;

		// 计算垂直方向的取值范围
		this.Constant.vPosRange.topY[0] = -halfImgH;
	    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
	    this.Constant.vPosRange.x[0] = halfStageW - imgW;
	    this.Constant.vPosRange.x[1] = halfStageW;

		this.rearrange(0);

	}

	/*
	 * 重新布局所有图片
	 * @param centerIndex 指定居中排布哪个图片
	 */
	rearrange (centerIndex) {
		let imgsArrangeArr = this.state.imgsArrangeArr,
			Constant = this.Constant,
			centerPos = Constant.centerPos,
			hPosRange = Constant.hPosRange,
			vPosRange = Constant.vPosRange,
			hPosRangeLeftSecX = hPosRange.leftSecX,
			hPosRangeRightSecX = hPosRange.rightSecX,
			hPosRangeY = hPosRange.y,
			vPosRangeTopY = vPosRange.topY,
			vPosRangeX = vPosRange.x,

			imgsArrangeTopArr = [], // 用来储存在上侧区域的图片的状态信息
			topImgNum = Math.floor(Math.random() * 2), // 取一个或者不取
			topImgSpliceIndex = 0, // 标记在上侧区域的图片是从数组的哪个区域拿出来的
			imgsArrangeCenter = imgsArrangeArr.splice(centerIndex,1); // 从所有图片的状态信息中取出中间图片的状态信息

			// 首先居中centerIndex的图片
			imgsArrangeCenter[0].pos = centerPos;

			// 取出要布局上侧的图片的状态信息
			topImgSpliceIndex = Math.floor(Math.random(imgsArrangeArr.length - topImgNum));
			imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex,topImgNum);

			// 布局位于上侧的图片
			imgsArrangeTopArr.forEach((value, index) => {
				imgsArrangeTopArr[index].pos = {
					top: getRangeRandom(vPosRangeTopY[0],vPosRangeTopY[1]),
					left: getRangeRandom(vPosRangeX[0],vPosRangeX[1])
				}
			});

			// 布局左右两侧的图片
			for (let i = 0 , len = imgsArrangeArr.length, k = len / 2 ; i < len ; i++) {
				let hPosRangeLORX = null;

				// 前半部分布局左边,右半部分布局右边
				if (i < k) {
					hPosRangeLORX = hPosRangeLeftSecX;
				} else {
					hPosRangeLORX = hPosRangeRightSecX;
				}

				imgsArrangeArr[i].pos = {
					top: getRangeRandom(hPosRangeY[0],hPosRangeY[1]),
					left: getRangeRandom(hPosRangeLORX[0],hPosRangeLORX[1])
				}

			}

			// 重新加入上侧图片的状态信息
			if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
				imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
			}

			// 重新加入中心图片的状态信息
			imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenter[0]);

			// 重新渲染图片
			this.setState({
				imgsArrangeArr : imgsArrangeArr
			});

	}

	render () {

		let controllerUnits = [],
			imgFigures = [];

		imageDatas.forEach((value, index) => {

			if (!this.state.imgsArrangeArr[index]) {
				this.state.imgsArrangeArr[index] = {
					pos: {
						left: 0,
						top: 0
					},
					rotate: 0
				}
			}

			imgFigures.push(<ImgFigure data={value} key={index} ref={'imgFigure' + index} arrange={this.state.imgsArrangeArr[index]} />);
		});

		return (
			<section className="stage" ref="stage">
				<section className="img-sec">
					{imgFigures}
				</section>
				<nav className="controller-nav">
					{controllerUnits}
				</nav>	
			</section>
		);
	}

}

ReactDOM.render(<App />, document.getElementById('content'));











