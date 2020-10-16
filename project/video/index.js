//拿到要操作的DOM结构
//在这个DOM上滑动鼠标能控制滑块的位置
//能控制这个DOM的高度发生变化
//根据该DOM高度来调整视频播放的速度




var speed = document.querySelector(".speed");
var bar = document.querySelector(".speed-bar");
var video = document.querySelector("video");

speed.addEventListener("mousemove", function(e){
    // 控制滑块的位置
    var y = e.pageY - speed.offsetTop;   //offsetTop是获取某个dom到页面顶端的高度
    var percent = y / speed.offsetHeight;    //offsetHeight是获取某个dom结构自身的高度
    var min = 0.4;
    var max = 4;
    var height = Math.round( percent * 100 ) + '%';
    var playBackRate = min + percent * ( max - min);

    bar.style.height = height;
    video.playbackRate = playBackRate;
    bar.textContent = playBackRate.toFixed(2) + "x";

})
