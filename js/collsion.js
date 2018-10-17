//game/js/collsion.js  完成碰撞检测
//1.大鱼碰撞食物
    //1.1创建全局函数 
    //功能：检测大鱼与所有食物是否发生碰撞
    function momFruitsCollsion(){
        for(var i=0;i<fruit.num;i++){
            if(fruit.alive[i]){
                var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
                if(l<900){//小于30像素 47
                    //1.当前食物消失
                    fruit.alive[i]=false;
                    //2.增长分数
                    if(fruit.fruitType[i]=="orange"){
                        data.double=2;
                    }else{
                        data.double=1;
                    }
                    data.addScore();
                    wave.born(fruit.x[i],fruit.y[i])
                }
            }
        }
    }
    //1.2将collsion.js 添加index.html
    //1.3在main.js   函数添加gameloop
//2.大鱼碰撞小鱼