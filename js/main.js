/*main.js 
创建游戏所有全局变量
创建游戏中各个对象调用初始化湖绘制方法
1：创建全局变量
2：创建入口函数
3：创建初始化函数
4：创建一个绘制函数
5：当index.html加载结束调用入口函数
*/

//1：创建全局变量
 var can1=null;      //二个画布
 var can2=null;
 var ctx1=null;      //二个画笔
 var ctx2=null;
 var canWidth=0;     //画布宽度高度
 var canHeight=0;
//1.1创建全局变量背景图片
 var bgPic=null;
//1.2创建全局变量保存海葵对象
 var ane=null;
//1.3创建全局变量保存食物对象
 var fruit=null;
//1.4创建全局变量保存大鱼对象
 var mom=null;
//1.5创建两个全局变量保存鼠标位置
 var mx=0;
 var my=0;
 //1.6创建两个变量保存 上一帧执行时间开始
 //                   二帧之间时间差
 var lastTime=0;
 var deltaTime=0;
 //1.7创建一个变量保存分数对象
 var data=null;
 //1.8创建一个变量保存特效对象
 var wave=null;
//2：创建入口函数
function game(){
    init();
    gameloop();
}
//3：创建初始化函数
function init(){
    //3.1:初始化画布 画笔 画布宽度和高度
    can1=document.getElementById("canvas1");
    can2=document.getElementById("canvas2");
    ctx1=can1.getContext("2d");
    ctx2=can2.getContext("2d");
    canWidth=can1.width;
    canHeight=can1.height;
    
    //3.2创建背景图片对象并且下载
    bgPic=new Image();
    bgPic.src="src/background.jpg";

    //3.3:创建海葵对象并且调用初始化方法
    ane=new aneObj();
    ane.init();

    //3.4创建一个食物对象并且调用初始化方法
    fruit=new fruitObj();
    fruit.init();

    //3.5创建大鱼对象并且调用初始化方法
    mom=new momObj();
    mom.init();
    //3.6为画布1绑定监听鼠标移动事件处理函数
    can1.addEventListener("mousemove",onMouseMove,false);
    //3.7初始化两帧之间的时间差
    lastTime=Date.now();
    deltaTime=0;
    //3.8创建分数对象
    data=new dataObj();
    //3.9创建特效对象并且调用初始化方法
    wave=new waveObj();
}
//4：创建一个绘制函数
function gameloop(){
    //4.1:创建(智能)定时器 快(10ms) 慢(100ms)
    requestAnimationFrame(gameloop)
    //4.2:调用全局函数 监听画布上食物数量
    fruitMonitor();
    //4.3:清除画布1上所有元素
    ctx1.clearRect(0,0,canWidth,canHeight)
    //4.4:计算时间差
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    console.log(deltaTime);
    //4.4.1 调用碰撞检测方法
    momFruitsCollsion();
    //4.5:调用绘制背景函数
    drawBackground();
    //4.6:调用绘制海葵的方法
    ane.draw();
    //4.7:调用绘制食物的方法
    fruit.draw();
    //4.8:调用绘制大鱼方法
    mom.draw();
    //4.9:调用绘制分数方法
    data.draw();
    //4.10:调用绘制特效对象的方法
    wave.draw();
}
//5：当index.html加载结束调用入口函数
document.body.onload=game;

//6：创建函数计算鼠标在画布1上位置
function onMouseMove(e){
    if(e.offsetX||e.layerX){
        mx=e.offsetX==undefined?e.layerX:e.offsetX;
    }
    if(e.offsetY||e.layerY){
        my=e.offsetY==undefined?e.layerY:e.offsetY;
    }
    console.log(mx,my)
}