// $.noConflict();



$('.lgh-slide').lghSlide({ lghdelay: 3000, lghspeed: 1000 })
// $('#slide2').lghSlide({lghdelay:3000,lghspeed:3000})


// $('.lgh-slide').each(function(i,el){
//     slide(el)
// })

// (function(){
//     alert(arguments[0])
// })
// (function(){
//     alert(1)
// })
// (function(){
//     alert(1)
// })





// 页面加载成功时的放大动画
// 起始状态  七个图片缩在一点，li标签有默认边框值  border=2px
// 结束状态   states这个数组中定义了七张图片的样式，$zIndex这种写法让z-index值暂时无效
// var states = [
//     { '&zIndex': 1, width: 120, height: 150, top: 71, left: 134, $opacity: 0.5 }, // 1
//     { '&zIndex': 2, width: 130, height: 170, top: 61, left: 0, $opacity: 0.6 },   // 2
//     { '&zIndex': 3, width: 170, height: 218, top: 37, left: 110, $opacity: 0.7 }, //3
//     { '&zIndex': 4, width: 224, height: 288, top: 0, left: 262, $opacity: 1 },     //4
//     { '&zIndex': 3, width: 170, height: 218, top: 37, left: 468, $opacity: 0.7 },  //5
//     { '&zIndex': 2, width: 130, height: 170, top: 61, left: 620, $opacity: 0.6 },   //6
//     { '&zIndex': 1, width: 120, height: 150, top: 71, left: 496, $opacity: 0.5 }   //7
// ]
// 写法一 ：lis.css('border-width':'100px')
// 写法二:  lis.css('border-width':100)
// 写法三： lis.css({
// 'border-width':'100px',
// })
// 写法四： lis.css({
// borderWidth:'100px',
// })
// 以上这四种写法相同
// var lis = $('.lgh-slide li');
// var interval
// // 让轮播图到达states指定的状态
// // 当页面打开时，将轮播图从中心展开
// // 当轮播已经展开时，会滚动轮播（需要翻转states数组中的元素）
// function move() {
//     lis.each(function (i, el) {
//         // this=el
//         // 当取一个比较复杂的属性名的值时，用  方括号+字符串  的形式来取，如states[i]['&zIndex']
//         // opacity、z-index值在jquery的animate动画中，无论设置动画持续多长时间，都是瞬间改变
//         // .end()函数返回最近一次“破坏性”操作之前的jQuery对象
//         // 只要调整链式的顺序，都可以省略end()函数
//         // 比如将find('img').css('opacity',states[i].$opacity)放在.animate(states[i],5000)之后
//         $(this).find('img').css('opacity', states[i].$opacity)
//             .end()
//             .css('z-index', states[i]['&zIndex'])
//             .stop(true,true).animate(states[i], 1000)
//             console.log(test);
//     })
// }
// // 让轮播图从中心展开
// move();
// autoPlay();
// // 自动播放
// function autoPlay(){
// interval = setInterval(function (){
//     next();

// },3000)
// }
// // 停止自动播放
// function stop(){
// clearInterval(interval)
// }
// // 页面打开时，轮播图自动每隔三秒切换一张图片
// setInterval(function () {
//     // states.unshift(states.pop());//从后往前 4 5 6 7 1 2 3 4
//     states.push(states.shift());//从前往后 4 3 2 1 7 6 5 4
//     move()
// }, 3000);

// // 让轮播图翻转到下一张
// function next() {
//     states.push(states.shift());//从前往后 4 3 2 1 7 6 5 4
//     console.log(states.push(states.shift()));
//     move()
// }
// // 让轮播图翻转到上一张
// function prev() {
//     states.unshift(states.pop());//从后往前 4 5 6 7 1 2 3 4
//     move()
// }
// // 用on()给后一张添加监听事件,即点击切换到下一张
// $('.lgh-slide .lgh-slide-next').on('click', function () {
// stop();
// next();
// autoPlay();
// })
// // 用on()给前一张添加监听事件,即点击切换到上一张
// $('.lgh-slide .lgh-slide-prev').on('click', function () {
// stop();
// prev();
// autoPlay();
// })




// var lis = $('.lgh-slide li')
// var imgs = $('.lgh-slide img')
// var moving = false
// var interval

// function move() {
//     moving = true

//     lis.each(function (i, el) {
//         imgs.css('opacity', 0.7)
//         // this指li标签
//         // 设置每个li标签的z-index值
//         $(this).css('z-index', states[i].$zIndex)
//         // 以动画的形式给每个li标签添加属性，1秒一个，动画完成时执行匿名函数
//         $(this).animate(states[i], 1000, function () {
//             // 给每个img标签以动画的形式设置透明度
//             $(this).find('img').animate({ opacity: states[i].$opacity }, 500)
//         })
//     })

//     setTimeout(function () {
//         moving = false
//     }, 1000)
// }

// function autoPlay() {
//     interval = setInterval(function () {
//         // states.pop()当前数组的最后一个元素
//         // 将数组的最后一个元素放在数组的第一个位置，形成循环数组
//         states.unshift(states.pop())
//         move()
//         // 3秒钟换一张图片
//     }, 3000)
// }
// // 停止轮播
// function stopAutoPlay() {
//     clearInterval(interval)
// }
// // 点击前一张
// $('.lgh-slide .lgh-slide-next').click(function () {
//     // 当图片正在运动时，点击前一张无效，连点也只能切换一张图片
//     if (moving) return
//     stopAutoPlay()
//     states.unshift(states.pop())
//     move()
//     autoPlay()
// })
// // 点击后一张
// $('.lgh-slide .lgh-slide-prev').click(function () {
//     if (moving) return
//     stopAutoPlay()
//     states.push(states.shift())
//     move()
//     autoPlay()
// })
// // 鼠标放在图片时，让当前图片的opacity值为1，中间的图片的opacity值为0.7
// imgs.mouseenter(function () {
//     imgs.css('opacity', 0.7)
//     stopAutoPlay()
//     $(this).css('opacity', 1)
// })

// imgs.mouseout(function () {
//     $(this).css('opacity', 0.7)
//     autoPlay()
// })

// move()
// autoPlay()
