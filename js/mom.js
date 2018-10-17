//game/js/mom.js
//1.创建大鱼对象 momObj
var momObj=function(){
    this.x;             //大鱼坐标
    this.y;
    this.angle;         //大鱼游动角度
    this.bigEye=[];     //大鱼眼睛图片
    this.bigBody=[];    //大鱼身体图片
    this.bigTail=[];    //大鱼尾巴图片

    //切换在大鱼眼睛图片
    this.bigEyeStart=0;   //计算开始
    this.bigEyeEnd=2000;  //计算结果
    this.bigEyeIndex=0;   //图片下标
}
//2.为大鱼对象添加初始化方法
momObj.prototype.init=function(){
    //2.1大鱼初始化位置画布中心
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    //2.2大鱼初始化角度0
    this.angle=0;
    //2.3加载大鱼眼睛图片对象
    for(var i=0;i<2;i++){
        this.bigEye[i]=new Image();
        this.bigEye[i].src="src/bigEye"+i+".png";
    }
    //2.4加载大鱼身体图片对象
    for(var i=0;i<8;i++){
        this.bigBody[i]=new Image();
        this.bigBody[i].src="src/bigSwim"+i+".png";
    }
    //2.5加载大鱼尾巴图片对象
    for(var i=0;i<8;i++){
        this.bigTail[i]=new Image();
        this.bigTail[i].src="src/bigTail"+i+".png";
    }
    console.log(this.bigEye);
    console.log(this.bigBody);
    console.log(this.bigTail);
}
//3.为大鱼添加绘制方法
momObj.prototype.draw=function(){
    //让大鱼面向鼠标慢慢游动过去 -x -y
    this.x=lerpDistance(mx,this.x,0.98);
    this.y=lerpDistance(my,this.y,0.99);
    //让大鱼面向鼠标角度移动
    //-获取坐标差 大鱼 鼠标位置
    var deltaY=my-this.y;
    var deltaX=mx-this.x;
    //获取角度差 大鱼 鼠标
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    //函数计算新大鱼角度 
    this.angle=lerpAngle(beta,this.angle,0.9);
    //计算大鱼眼睛图片切换
    this.bigEyeStart=this.bigEyeStart+deltaTime;
    if(this.bigEyeStart>this.bigEyeEnd){
        this.bigEyeIndex=(this.bigEyeIndex+1)%2;
        this.bigEyeStart=0;
        if(this.bigEyeIndex==1){
            this.bigEyeEnd=200
        }
        if(this.bigEyeIndex==0){
            this.bigEyeEnd=2000;
        }
    }
    ctx1.save();                            //保存画笔状态
    ctx1.translate(this.x,this.y);          //平移原点
    ctx1.rotate(this.angle);                //旋转角度
    ctx1.drawImage(this.bigEye[this.bigEyeIndex],
        -this.bigEye[this.bigEyeIndex].width*0.5,
        -this.bigEye[this.bigEyeIndex].height*0.5);     //绘制大鱼眼睛
    ctx1.drawImage(this.bigBody[0],
        -this.bigBody[0].width*0.5,
        -this.bigBody[0].height*0.5);    //绘制大鱼身体
    ctx1.drawImage(this.bigTail[0],
        -this.bigTail[0].width*0.5+30,
        -this.bigTail[0].height*0.5);    //绘制大鱼尾巴
    ctx1.restore();                         //恢复画笔状态
}
//4.将mom.js添加 index.html
//5.将main.js创建大鱼对象并且调用相应方法