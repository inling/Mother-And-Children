//game/js/fruit.js 食物
/*食物总数量：30 其中 15活动状态 15不活动状态
  食物二张图片
  blue.png   蓝色食物1张
  fruit.png  橙色食物1张
  食物坐标
  食物行为：向上漂浮，由小变大
*/
//1.创建食物类
var fruitObj=function(){
    this.alive=[];  //是否活动
    this.orange=new Image();  //二张图片
    this.blue=new Image();
    this.x=[];
    this.y=[];
    this.l=[];                //图片长度(由小变大)
    this.spd=[];              //生长，漂浮
    this.fruitType=[];         //"blue""orange"
}
//2.添加属性食物数量
fruitObj.prototype.num=30;
//3.添加方法食物初始化
fruitObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=true;
        this.x[i]=i*25+Math.random()*30;
        this.y[i]=350;
        this.l[i]=0;
        this.spd[i]=Math.random()*0.017+0.03;
        this.fruitType[i]=Math.random()<0.9?"blue":"orange";
    }
    this.orange.src="./src/fruit.png";
    this.blue.src="./src/blue.png";
    console.log(this.alive);
    console.log(this.x);
    console.log(this.y);
    console.log(this.l);
    console.log(this.spd);
    console.log(this.fruitType);

}
//4.添加方法食物绘制
fruitObj.prototype.draw=function(){
    for(var i=0;i<this.num;i++){
        //查找食物 活动变大 向上漂浮
        if(this.alive[i]){  //如果当前食物活动状态
            if(this.l[i]<14){
                this.l[i]+=this.spd[i]*15;//生长
            }else{
                this.y[i]-=this.spd[i]*18;//向上漂浮
            }
            if(this.fruitType[i]=="blue"){
                var pic=this.blue;
            }else{
                var pic=this.orange;
            }
            ctx2.drawImage(
                pic,
                this.x[i]-this.l[i]*0.5,
                this.y[i]-this.l[i]*0.5,
                this.l[i],this.l[i]);
            if(this.y[i]<10){
                this.alive[i]=false;
            }
        }

    }
}
//5.将fruit.js加载index.html
//6.在main.js创建对象并且调用相应方法