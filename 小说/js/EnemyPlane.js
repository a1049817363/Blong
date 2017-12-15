/**
 * 敌军飞机
 */
class EnemyPlane{
	constructor(img,x,y,w,h,v,hp,hurt,score,gameStart){
		// 图片
		this.img = img;
		// 坐标
	    this.x_int = x;
	    this.y_int = y;
	    // 大小
	    this.w_int = w;
	    this.h_int = h;
	    // 速度
	    this.v_int = v;
	    // 血量
	    this.hp_int = hp
	    // 撞击产生的伤害值
	    this.hurt_int = hurt;
	    // 被消灭后得到的分数
	    this.score = score;
	    // 引用
	    this.gs = gameStart;
	}
	//移动
	move(){
		this.y_int += this.v_int;
		//判断敌军飞机的死亡
		if(this.y_int>this.gs.cvHeight+this.h_int){
			this.hp_int = 0;
		}
	}
	//绘制
	draw(){
		let img = this.img;
		let x = this.x_int;
		let y = this.y_int;
		let w = this.w_int;
		let h = this.h_int;
		// 判断生命状态
		if (this.hp_int>0) {
			this.gs.context.drawImage(img,x,y,w,h);
			// 调用移动方法
			this.move();
		} else {
			this.gs.ep_set.delete(this);// 将生命值为false的敌机从集合里面移除
			this.gs.score_int+=this.score;// 增加分数
			// 加入爆炸动画
			if(this.hp_int<=0&&y<this.gs.cvHeight){
				let bomb = new Bomb(this.gs.bomb_img,x,y,w,h,this.gs);
				this.gs.bo_set.add(bomb);
			}
		}
	}
	//得到当前飞机的矩形
	getRept(){
		return [this.x_int,this.y_int+this.h_int*0.2,this.w_int,this.h_int*0.6];
	}
}