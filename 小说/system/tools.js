/**
 * 工具
 */
class Tools{
	/**
	 * 碰撞检测
	 * @param 传入两个矩形(数组)，例如：[0,0,5,6],“0,0”代表坐标，“5,6”代表宽高
	 * @return boolen。true:相交
	 */
	static checkIntersects(rept1,rept2) {
		let rept1_x0 = rept1[0],rept1_x2 = rept1[0]+rept1[2];
		let rept1_y0 = rept1[1],rept1_y2 = rept1[1]+rept1[3];
		let rept2_x0 = rept2[0],rept2_x2 = rept2[0]+rept2[2];
		let rept2_y0 = rept2[1],rept2_y2 = rept2[1]+rept2[3];
		return !(rept1_x0>rept2_x2||rept1_x2<rept2_x0||rept1_y0>rept2_y2||rept1_y2<rept2_y0);
	}
	/**
	 * 获取图片
	 */
	static getImg(src){
		let img = new Image();
		img.src = src;
		return img
	}
	
}
/**
 * requestAnimationFrame 的浏览器兼容性处理
 */
window.requestAnimFrame=(function(){
	return  window.requestAnimationFrame   || 
    	window.webkitRequestAnimationFrame || 
    	window.mozRequestAnimationFrame    || 
    	window.oRequestAnimationFrame      || 
    	window.msRequestAnimationFrame     || 
    	function(/* function */ callback, /* DOMElement */ element){
        	window.setTimeout(callback, 1000 / 60);
    	};
})();