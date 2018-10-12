# Mother-And-children
鱼妈妈和鱼宝宝

1：目录结构
game -- 所有游戏资源都保存在此处
    js      -保存所有js文件
            (1)main.js           入口程序
            (2)commonFunction.js 公共函数库
            (3)background.js     绘制背景图片
    src     -(3)保存游戏所有图片
        babyEye0.png babyEye1.png 小鱼眼睛 2张
        babyFade0.png babyFade1.png 小鱼身体 20张
        babyTail0.png babyTail9.png 小鱼尾巴 8张
        background.jpg              大海背景
        bigEye0.png bigEye1.png     大鱼眼睛 2张
        bigSwim0.png bigSwim7.png   大鱼身体 8张
        bigTail0.png bigTail7.png   小鱼尾巴 8张
        blue.png                    蓝色食物 1张
        fruit.png                   橙色食物 1张
    index.html  (4)启动网页
2：启动网页 index.html
    (1):创建父元素 div 保存所有画布
    (2):创建二个画布
        z-index:1 0
        <canvas>前[大鱼;小鱼;分数;特效]</canvas>
        <canvas>后[背景;食物;海葵]</canvas>
    (3)：修饰画布(!!!)
3：创建程序 js
4：分析海葵
    -50根
    -位置随机
    -高度(没有太低也没有太高)
    4.1:创建海葵专用文件    game/js/ane.js
    4.2:创建海葵对象        aneObj
    4.3:创建属性保存个数    50
    4.4:创建海葵初始化方法  init
    4.5:创建海葵绘制方法    draw
    4.6:添加               index.html
    4.7:在main.js创建对象并且调用相应方法
