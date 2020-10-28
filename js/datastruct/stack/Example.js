"use strict";
exports.__esModule = true;
var stack_1 = require("./lib/stack"); //  es6  模块化引入
var StackObj_1 = require("./StackObj");
var stack = new stack_1["default"]();
stack.push("第一条数据");
stack.push("第二条数据");
stack.pop();
console.log(stack.peak());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.toString());
console.log(stack.clear());
// console.log(stack);
var decimalToBinary = function (decNumber) {
    var stack = new stack_1["default"](); // 入栈每一个位
    var number = decNumber;
    var rem; //余数
    var binaryString = '';
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var decimalToBinaryObjStack = function (decNumber) {
    var stack = new StackObj_1["default"]();
    var number = decNumber;
    var rem; //余数
    var binaryString = '';
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var testNumber = 999989993232287565464;
console.time("数组栈");
console.log(decimalToBinary(testNumber));
console.timeEnd("数组栈");
console.time("对象栈");
console.log(decimalToBinaryObjStack(testNumber));
console.timeEnd("对象栈");
