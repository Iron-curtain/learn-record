// const arr = [1, 2, 3, 4]

// const arr = new Array()
// const arr = []

// const arr = new Array(7).fill(1)


// fill的入参如果是引用，那么在填充的时候是入参的引用
// const arr = (new Array(7)).fill([])
// arr[0][0] = 1
// console.log(arr);

const arr = new Array(7)
const len = arr.length
for (let i = 0; i < len; i++) {
  arr[i] = []
}