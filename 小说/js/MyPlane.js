/**
 * 我军飞机
 */
class MyPlane{
	
	constructor(img,x,y,w,h,v,hp,gameStart) {
		// 飞机图片
	    this.img = img;
	    // 坐标
	    this.x_int = x;
	    this.y_int = y;
	    // 大小
	    this.w_int = w;
	    this.h_int = h;
	    //定义速度
	    this.v_int = v;
	    // 生命状态
	    this.hp_int = hp;
	    // 引用
	    this.gs = gameStart;
	    // 方向
	    this.isUp_bool=false;
	    this.isDown_bool=false;
	    this.isLeft_bool=false;
	    this.isRight_bool=false;
	    // 计算飞机活动范围
	    this.range = [0-w/3,0,this.gs.cvWidth-w*2/3,this.gs.cvHeight-h];
	    
	}
	
	//绘制
	darw(){
		let img = this.img;
		let x = this.x_int;
		let y = this.y_int;
		let w = this.w_int;
		let h = this.h_int;
		if(this.hp_int>0){
			this.gs.context.drawImage(img,x,y,w,h);
			this.move();
		}else{// 死亡
			let bomb = new Bomb(this.gs.bomb_img,x,y,w,h,this.gs);
			this.gs.bo_set.add(bomb);
		}
		
	}
	
	// 移动
	move(){
		let isUp=this.isUp_bool,isDown=this.isDown_bool,isLeft=this.isLeft_bool,isRight=this.isRight_bool;
		let v = this.v_int;
		if(isUp && !isDown && !isLeft && !isRight){//上
			if(this.y_int>this.range[1])this.y_int -= v;
		}else if(!isUp && !isDown && !isLeft && isRight){//右
			if(this.x_int<this.range[2])this.x_int += v;
		}else if(!isUp && isDown && !isLeft && !isRight){//下
			if(this.y_int<this.range[3])this.y_int += v;
		}else if(!isUp && !isDown && isLeft && !isRight){//左
			if(this.x_int>this.range[0])this.x_int -= v;
		}else if(isUp && !isDown && isLeft && !isRight){//上左
			if(this.y_int>this.range[1])this.y_int -= v;
			if(this.x_int>this.range[0])this.x_int -= v;
		}else if(isUp && !isDown && !isLeft && isRight){//上右
			if(this.y_int>this.range[1])this.y_int -= v;
			if(this.x_int<this.range[2])this.x_int += v;
		}else if(!isUp && isDown && isLeft && !isRight){//下左
			if(this.y_int<this.range[3])this.y_int += v;
			if(this.x_int>this.range[0])this.x_int -= v;
		}else if(!isUp && isDown && !isLeft && isRight){//下右
			if(this.y_int<this.range[3])this.y_int += v;
			if(this.x_int<this.range[2])this.x_int += v;
		}
	}
	
	// 监听键盘事件
	keyDown(keyCode){
		let o = this;
		switch(keyCode){
			case 37://左
				o.isLeft_bool=true;
				break;
			case 38://上
				o.isUp_bool=true;
				break;
			case 39://右
				o.isRight_bool=true;
				break;
			case 40://下
				o.isDown_bool=true;
				break;
		}
	}
	keyUp(keyCode){
		let o = this;
		switch(keyCode){
			case 37://左
				o.isLeft_bool=false;
				break;
			case 38://上
				o.isUp_bool=false;
				break;
			case 39://右
				o.isRight_bool=false;
				break;
			case 40://下
				o.isDown_bool=false;
				break;
		}
	}
	//得到当前飞机的矩形
	getRept(){
		return [this.x_int,this.y_int+this.h_int*0.2,this.w_int,this.h_int*0.6];
	}
	//检查我机与敌机是否发生碰撞
	checkToEpBump(){
		for (let item of this.gs.ep_set.values()) {
			if(Tools.checkIntersects(this.getRept(),item.getRept())&&item.hp_int>0&&this.hp_int>0){
				this.hp_int -= item.hurt_int;
				item.hp_int = 0;
			}
		}
	}
}