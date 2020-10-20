var baseObj = {
    //随机数
    randomNum: function (min, max) {
        return parseInt(Math.random() * (max - min + 1) + min)
    },
    //判断两个矩形是否发生碰撞
    rectangleCrashExamine: function (obj1, obj2){
        var obj1Left = obj1.offsetLeft
        var Obj1Width = obj1.offsetLeft + obj1.offsetWidth
        var obj1Top = obj1.offsetTop
        var obj1Height = obj1.offsetTop + obj1.offsetHeight

        var obj2Left = obj2.offsetLeft
        var Obj2Width = obj2.offsetLeft + obj2.offsetWidth
        var obj2Top = obj2.offsetTop
        var obj2Height = obj2.offsetTop + obj2.offsetHeight

        if(!(obj1Left > Obj2Width || Obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top)){
            return true
        }
        return false
    }
}