
/**
 * 飞机爆炸的动画
 */
class Bomb{
	constructor(imgArr,x,y,w,h,gameStart){
		// 图片
		this.img_arry = imgArr;
		// 坐标
	    this.x_int = x;
	    this.y_int = y;
	    // 大小
	    this.w_int = w;
	    this.h_int = h;
	    // 引用
	    this.gs = gameStart;
	    // 计数帧数
	    this.fps_num = 0;
	}
	
	//绘制
	draw(){
		let img_arry = this.img_arry;
		let x = this.x_int;
		let y = this.y_int;
		let w = this.w_int;
		let h = this.h_int;
		// 绘图
		this.gs.context.drawImage(img_arry[this.fps_num++],x,y,w,h);
		// 动画结束后从集合种删除此对象
		if (this.fps_num==img_arry.length) {
			this.gs.bo_set.delete(this);
		}
	}
	
}
