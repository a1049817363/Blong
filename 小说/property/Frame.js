/**
 * 画布基础类
 */
class Frame{
	constructor(cvWidth,cvHeight,allImgNum){
		// 定义画布大小
		this.cvWidth = cvWidth;
		this.cvHeight = cvHeight;
		this.canvas = document.getElementById('canvas');
		this.canvas.width = this.cvWidth;
		this.canvas.height = this.cvHeight;
		this.context = canvas.getContext('2d');
		// 表示加载进度的值（即当前已加载多少张图片）
		this.progress_int = 0;
		// 总共需加载多少张图片
		this.allImgNum_int = allImgNum||0;
	}
	/**
	 * 获取图片
	 */
	getImg(src){
		let o = this;
		let img = new Image();
		img.onload = ()=>o.progress_int++;
		img.src = src;
		return img
	}
	/**
	 * 绘制初始化-进度条
	 */
	_init(){
		let o = this;
		o.context.save();
		// 循环绘制画布
		animate();
		function animate() {
		    o._draw();
		    if(o.progress_int<o.allImgNum_int)window.requestAnimFrame( animate );
		    else {
				o.context.restore();
		    	o.showFrame();//加载玩图片就进入游戏
		    }
		}
	}
	/**
	 * 绘制进度条
	 */
	_draw(){
		//进度条坐标及大小
		let x = this.cvWidth*0.2;
		let y = this.cvHeight*0.40;
		let w = this.cvWidth*0.6;
		let h = 24;
		let pro= this.progress_int/this.allImgNum_int;
		let progress = parseInt(w*pro);
		let ctx = this.context;
		ctx.shadowBlur=40;
		ctx.shadowColor='#afa';
		//绘制背景
		ctx.beginPath();
		ctx.fillStyle="#000";
		ctx.fillRect(0,0,this.cvWidth,this.cvHeight);
		ctx.closePath();
		//绘制进度条
		ctx.beginPath();
		ctx.lineJoin='round';
		let grd=ctx.createLinearGradient(0,y,0,y+h);
		grd.addColorStop(0,"#6f6");
		grd.addColorStop(0.4,"#afa");
		grd.addColorStop(1,"#6f6");
		ctx.fillStyle=grd;
		ctx.fillRect(x,y,progress,h);
		ctx.closePath();
		//绘制进度条边框
		ctx.beginPath();
		ctx.strokeStyle="#6f6";
		ctx.lineWidth=3;
		ctx.lineJoin='round';
		ctx.strokeRect(x,y,w,h);
		ctx.closePath();
		//绘制文字
		ctx.beginPath();
		grd=ctx.createLinearGradient(0,y+h*2,0,y+h*3);
		grd.addColorStop(0,"#6f6");
		grd.addColorStop(0.4,"#afa");
		grd.addColorStop(1,"#6f6");
		ctx.fillStyle=grd;
		ctx.textAlign="center";
		ctx.font="35px Arial";
		ctx.fillText(parseInt(pro*100)+'%',this.cvWidth*0.5,y+h*3);
		ctx.closePath();
	}
}