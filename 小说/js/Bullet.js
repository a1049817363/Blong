/**
 * 我军子弹
 */
class Bullet{
	constructor(img,x,y,w,h,vx,vy,hurt,isLife,gameStart){
		// 背景图片
		this.img = img;
		// 坐标
	    this.x_int = x;
	    this.y_int = y;
	    // 大小
	    this.w_int = w;
	    this.h_int = h;
	    // 速度
	    this.vx_int = vx;
	    this.vy_int = vy;
	    // 产生的伤害值
	    this.hurt_int = hurt;
	    // 生命状态
	    this.isLife_bool = isLife;
	    // 引用
	    this.gs = gameStart;
	}
	// 移动
	move(){
		this.y_int -= this.vy_int;
		this.x_int -= this.vx_int;
		//判断子弹的死亡
		if(this.y_int<0-this.h_int){
			this.isLife_bool = false;
		}
	}
	// 绘制
	draw(){
		let img = this.img;
		let x = this.x_int;
		let y = this.y_int;
		let w = this.w_int;
		let h = this.h_int;
		// 判断生命状态
		if (this.isLife_bool) {
			this.gs.context.drawImage(img,x,y,w,h);
			// 调用移动方法
			this.move();
		} else {
			this.gs.bt_set.delete(this);// 将生命值为false的子弹从集合里面移除
		}
	}
	//得到当前子弹的矩形
	getRept(){
		return [this.x_int,this.y_int+this.h_int*0.2,this.w_int,this.h_int*0.6];
	}
	//检查我机与敌机是否发生碰撞
	checkToEpBump(){
		for (let item of this.gs.ep_set.values()) {
			if(Tools.checkIntersects(this.getRept(),item.getRept())&&item.hp_int>0&&this.isLife_bool){
				this.isLife_bool = false;
				item.hp_int -= this.hurt_int;
			}
		}
	}
}
