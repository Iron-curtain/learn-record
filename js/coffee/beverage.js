var Beverage = function(){

}
Beverage.prototype.boilWater = function(){
    console.log("把水煮沸");
}
// 冲泡  空的方法
Beverage.prototype.brew = function(){
}
// 冲泡  倒进杯子
Beverage.prototype.pureInCup = function(){
}
Beverage.prototype.addCondiments = function(){
}
Beverage.prototype.init = function() {
    this.boilWater()
    this.brew()
    this.pureInCup()
    this.addCondiments()
}

// var oneBeverage = new Beverage()
// console.log(typeof oneBeverage);

var Coffee = function(){

}
// var oneBeverage = new Beverage()
// Coffee.prototype = new Beverage()
Coffee.prototype = Beverage.prototype
// Coffee.prototype = oneBeverage.__proto__
// console.log(Coffee.prototype);
Coffee.prototype.brew = function() {
    console.log("用沸水冲泡");
}
Coffee.prototype.pureInCup = function() {
    console.log("把咖啡倒进杯子");
}
Coffee.prototype.addCondiments = function() {
    console.log("加糖和牛奶");
}
var coffee = new Coffee
coffee.init()