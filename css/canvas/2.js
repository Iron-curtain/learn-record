let arr = [{a:1}, {a:2}]
// map 映射
let newArr = arr.map((item) => {
    console.log(item);
})

let arr1 = arr.map((item) => {
    return `<li>${item.a}</li>`
})

arr.forEach((item) => {
    console.log(item);
})

let arr2 = [1, 2, 3, 4, 5]
let sum = arr2.reduce((pre,item) => {
    return pre + item
})
console.log(sum);

// push   reduce    map     foreach     every      some

let arr3 = [{a:1}, {b:2}, {c:3}]
let obj = arr3.reduce((pre, item) => {
    return {
        ...pre,
        ...item
    }
    // Object.assign()
})
console.log(obj);