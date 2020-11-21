//      let     const

//      字符串拼接

// es6 新增的数组的方法
let arr = ['a', 'b', 'c']
// console.log(Object.keys(arr));
// let newArr = [...arr.keys()]
// console.log(newArr);

// let iter = arr.entries()
// console.log(iter);

// for(let e of iter) {
//     console.log(e);
// }

// let eArr = arr.values()
// console.log(eArr);
// for (let e of eArr) {
//     console.log(e);
// }

// function test(fruit) {
//     if (fruit == 'apple' || fruit == 'strawberry') {
//         console.log('red');
//     }
// }

// function test(fruit) {
//     const redFruits = ['apple', 'strawberry', 'cherry']
//     if(redFruits.includes(fruit)){
//         console.log(red);
//     }
// }

// let people = [
//     {name: '小陶', age: 20},
//     {name: '叶总', age: 18},
//     {name: '大陶', age: 21}
// ]
// function findFriend(person) {
//     return person.name === '叶总'
// }
// console.log(people.find(findFriend));


let test = ['a', 'b', 'c', 'd']
function index(i) {
    return i == 'b'
}
console.log(test.findIndex(index));