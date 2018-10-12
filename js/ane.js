//4.1:创建海葵专用文件 game/js/ane.js
//4.2:创建海葵对象[构造对象] aneObj
var aneObj=function(){
    this.x=[];
    this.len=[];
}
//4.3:创建属性保存个数
aneObj.prototype.num=50;
//4.4:创建海葵初始化方法 init
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        //每个海葵位置 每个海葵宽度 20
        this.x[i]=i*16+Math.random()*20;
        //每个海葵高度=基准高度+随机数
        this.len[i]=200+Math.random()*50;
    }
    console.log(this.x);
    console.log(this.len);
}
//4.5:创建海葵绘制方法 draw
aneObj.prototype.draw=function(){
    //保存画笔状态
    ctx2.save();
    //创建循环
    for(var i=0;i<this.num;i++){
        //开始新路径
        ctx2.beginPath();
        //移动底端
        ctx2.moveTo(this.x[i],canHeight);
        //向上绘制直线
        ctx2.lineTo(this.x[i],canHeight-this.len[i]);
        ctx2.lineWidth=20;              //宽度
        ctx2.globalAlpha=0.6;           //透明度
        ctx2.strokeStyle="#3b154e";     //描边颜色
        ctx2.lineCap="round";            //圆角
        ctx2.stroke();
    }
    //恢复画笔状态
    ctx2.restore();
}
//4.6:添加index.html
//4.7:在main.js创建对象并且调用相应方法