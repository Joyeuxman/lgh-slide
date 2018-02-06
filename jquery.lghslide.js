// $.fn创建jquery插件
// 在jquery插件中不能存在全局变量
// 通过使用匿名函数自调的方法，来使全局变量变为局部变量,
// 不然slide为全局变量,会污染全局作用域
// 当写了一个匿名函数时，要立即调用
// 即(function(){})();
(function($){
    // var $ = jQuery;
// 本函数每次调用时都可以创建一个函数作用域
// 这个函数作用域能分配给一个轮播图
// 所以现在要求调用本函数时必须把轮播图根标签元素通过参数传过来
// 无论调用的函数是否为闭包函数，每次调用时都会产生全新的作用域
// 作用域至少有两种：全局作用域、函数作用域
// 为每个轮播图分配一个作用域
 var slide = function (ele, options) {
    // this指调用lghSlide()方法的对象，即；类名为.lgh-slide
    // console.log(this);
    var $ele = $(ele);//$(ele)是一个对象，防止传入标签元素
    var lis = $ele.find('li');
    var interval  // 控制自动播放的变量
    // var test = '123';//用于测试闭包的变量，没用
    // 给参数设置默认值的方法：用 || 符号 
    // var lghdelay = d || 3000;  //控制轮播图滚动的的速度
    // var lghspeed = s || 1000;  //控制轮播图切换图片的的速度
    var options = $.extend({
        lghdelay: 3000,
        lghspeed: 1000,
    }, options)
    // 页面加载成功时的放大动画
    // 起始状态  七个图片缩在一点，li标签有默认边框值  border=2px
    // 结束状态   states这个数组中定义了七张图片的样式，$zIndex这种写法让z-index值暂时无效
    var states = [
        { '&zIndex': 1, width: 120, height: 150, top: 71, left: 134, $opacity: 0.5 }, // 1
        { '&zIndex': 2, width: 130, height: 170, top: 61, left: 0, $opacity: 0.6 },   // 2
        { '&zIndex': 3, width: 170, height: 218, top: 37, left: 110, $opacity: 0.7 }, //3
        { '&zIndex': 4, width: 224, height: 288, top: 0, left: 262, $opacity: 1 },     //4
        { '&zIndex': 3, width: 170, height: 218, top: 37, left: 468, $opacity: 0.7 },  //5
        { '&zIndex': 2, width: 130, height: 170, top: 61, left: 620, $opacity: 0.6 },   //6
        { '&zIndex': 1, width: 120, height: 150, top: 71, left: 496, $opacity: 0.5 }   //7
    ]

    function move() {
        lis.each(function (i, el) {
            // this=el
            // 当取一个比较复杂的属性名的值时，用  方括号+字符串  的形式来取，如states[i]['&zIndex']
            // opacity、z-index值在jquery的animate动画中，无论设置动画持续多长时间，都是瞬间改变
            // .end()函数返回最近一次“破坏性”操作之前的jQuery对象
            // 只要调整链式的顺序，都可以省略end()函数
            // 比如将find('img').css('opacity',states[i].$opacity)放在.animate(states[i],5000)之后
            $(el).find('img').css('opacity', states[i].$opacity)
                .end()
                .css('z-index', states[i]['&zIndex'])
                .stop(true, true).animate(states[i], options.lghspeed)
            // console.log(test);
        })
    }

    // 让轮播图翻转到下一张
    function next() {
        states.push(states.shift());//从前往后 4 3 2 1 7 6 5 4
        // console.log(states.push(states.shift()));
        move()
    }
    // 让轮播图翻转到上一张
    function prev() {
        states.unshift(states.pop());//从后往前 4 5 6 7 1 2 3 4
        move()
    }
    // 自动播放
    function autoPlay() {
        interval = setInterval(function () {
            next();
        }, options.lghdelay)
    }
    // 停止自动播放
    function stop() {
        clearInterval(interval)
    }
    // 用on()给后一张添加监听事件,即点击切换到下一张
    $ele.find('.lgh-slide-next').on('click', function () {
        stop();
        next();
        autoPlay();
    })
    // 用on()给前一张添加监听事件,即点击切换到上一张
    $ele.find('.lgh-slide-prev').on('click', function () {
        stop();
        prev();
        autoPlay();
    })

    // 让轮播图从中心展开
    move();
    // 让轮播图开始自动播放
    autoPlay();

}
$.fn.lghSlide = function (options) {
    this.each(function (i, el) {
        slide(el, options)
    })
    // 返回this(调用本函数的jquery对象)
    // 用来支持query链式调用
    return this;
}
// $.lghSlide();
// console.log([1, 2, 3] == [3, 2, 1])//false
// console.log(1, jQuery);
// console.log(2, $);
// console.log(3, typeof jQuery);
// console.log(4, typeof $);
// console.log(5, $('body'));
// console.log(6, typeof $('body'));
})(jQuery);
