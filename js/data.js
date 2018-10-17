//game/js/data.js 保存分数
//1.创建分数对象
var dataObj=function(){
    this.double=1;   //1 蓝色食物   2 橙色食物
    this.score=0;    //分数
}
//2.创建绘制分数方法
dataObj.prototype.draw=function(){
    ctx1.save();
    ctx1.fillStyle="#fff";
    ctx1.font="35px Verdana";
    ctx1.fillText("SCORE:"+this.score,canWidth*0.4,canHeight-80);
    ctx1.restore();
}
//3.将data.js 加载index.html
//4.将main.js 创建对象并且调用相应方法
//5.创建添加分数方法
dataObj.prototype.addScore=function(){
    this.score+=this.double*100; //计算分数
    this.double=1;               //恢复默认值
}
