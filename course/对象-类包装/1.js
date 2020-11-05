var person = {
    name: 'jiusheng',
    age: 20,
    sex: 'boy',
    drink: function() {
        console.log('I am drinking');
        this.health++
    },
    smoke: function() {
        console.log('I am smoking! huazi');
        this.health--
    },
    health: 100
}
// person.health++
// console.log(person.health);

person.boyfriend = 'mrzhou'

//  增删改查

person.sex = 'girl'

// 删除
delete person.sex

console.log(person);

console.log(person.sex);   // 访问对象中没有的属性，为undefined
console.log(cat);        

// 对象的创建
// 1. var obj = {}
// 2. 构造函数
        // 1) 系统自带的构造函数，Object()
        // 2) 自定义构造函数



function Car(color){
    this.name = 'BWM'
    this.height = '1400'
    this.long = '4900'
    this.weight = 1000
    this.health = 100
    this.run = function() {
        this.health--
    }
    this.color = color
}
var car = new Car('black')
var car1 = new Car('white')

car.name = '红旗'
car.name = '劳斯莱斯'

car.run()
console.log(car1);