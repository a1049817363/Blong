/**
 * 游戏背景
 */
class BackGround{
	constructor(img,x,y,w,h,gameStart){
		// 背景图片
		this.img = img;
		// 坐标
	    this.x_int = x;
	    this.y_int = y;
	    // 大小
	    this.w_int = w;
	    this.h_int = h;
	    // 引用
	    this.gs = gameStart;
	}
	//绘制
	darw(){
		let bg = this.img;
		let x = this.x_int;
		let y = this.y_int;
		let w = this.w_int;
		let h = this.h_int;
		this.gs.context.drawImage(bg,x,y,w,h);
		this.move();
	}
	//移动
	move(){
		if(this.y_int>=this.h_int){
			this.y_int=0-this.h_int;
		}
		this.y_int+=0.7;
	}
}
