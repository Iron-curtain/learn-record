// interface Person {
//   readonly id?: number,
//   name: string,
//   age: number,
//   isShuai?: true,
  
// }

// let wn:Person = {
//   name: '蜗牛',
//   age: 18
// }
// wn.isShuai = true
// wn.id = 123

// function add(x: number, y: number, z?: number):number {
//   return x + y
// }

// const add2: (x: number, y: number, z?: number) => number = add

// const sum = (x: number, y: number) => {
//   return x + y
// }
// interface ISum {
//   (x: number, y: number): number
// }
// const sum2: ISum = sum


// let numberOrString: number | string
// numberOrString.toString()


// function getLength(input: string | number):number {
//   const str = input as string
//   if (str.length) {
//     return str.length
//   } else {
//     const number = input as number
//     return number.toString().length
//   }
// }

// function getLength2(input: string | number):number {
//   if (typeof input === 'string') {
//     return input.length
//   } else {
//     return input.toString().length
//   }
// }


class Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  run () {
    return `${this.name} is running`
  }
}

// const cat = new Animal('lily')

// class Dog extends Animal {
//   bark() {
//     return `${this.name} is barking`
//   }
// }

// const xiaobai = new Dog('xiaobai')
// console.log(xiaobai.run());


// class Cat extends Animal {
//   constructor(name:string) {
//     super(name)
//   }
//   run () {
//     return 'meow,' + super.run()
//   }
// }

// const maomao = new Cat('maomao')
// console.log(maomao.run());


// interface Radio {
//   switchRadio(trigger: boolean):void
// }
// class Car implements Radio {
//   switchRadio(trigger) {
//     return 123
//   }
// }


// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }
// console.log(Direction.Up);
// console.log(Direction[0]);

// 泛型，指在定义函数，接口或类的时候，不预先指定具体的类型，而在使用的时候再指定的类型
// function echo(arg) {
//   return arg
// }
// const result = echo(123)

function echo<T>(arg: T):T {
  return arg
}