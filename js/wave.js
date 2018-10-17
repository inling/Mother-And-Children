//game/js/wave.js
//1.创建特效光环对象
var waveObj=function(){
    this.x=[];          //光环 圆心 x y
    this.y=[];
    this.r=[];          //半径
    this.alive=[];      //状态
}
//2.为特效光环对象数量 10
waveObj.prototype.num=10;
//3.特效光环对象初始化方法
waveObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.r[i]=0;
    }
}
//4.特效光环对象绘制方法
waveObj.prototype.draw=function(){
    ctx1.save();
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
            ctx1.stroke();
        }
    }
    ctx1.restore();
}
//5.将wave.js 添加 index.html
//6.在main.js 创建并调用相应方法
//7.添加出生新光环方法
waveObj.prototype.born=function(x,y){
    //7.1:创建循环挑选第一个不活动光环
    for(var i=0;i<this.num;i++){
        if(!this.alive[i]){
            this.alive[i]=true;
            this.x[i]=x;
            this.y[i]=y;
            this.r[i]=20;
            return;
        }
    }
}