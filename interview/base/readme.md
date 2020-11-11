# 原始类型有几种
boolean     null    undefined   number  string  symbol

# null 是对象吗
是
000 代表的是对象，null 的二进制都是0


0.1 + 0.2 == 0.3       错误     精度丢失        转化为二进制计算

# 原始类型和对象类型有什么差别？
原始类型存的是值
对象类型存的是指针


# typeof能正确判断的类型是
typeof只能判断原始类型(null除外)
instanceof 只能判断引用类型

# instanceof    原理


----

# == 和 === 区别？      index2.js


# 什么是闭包


# 深浅拷贝  （copy.js)
Object.assign()     如果拷贝的属性为原始值类型，那么是深拷贝，如果是引用类型，那么是浅拷贝

JSON.parse(JSON.stringify()) 的缺陷
1. 会忽略undefined
2. 会忽略Symbol
3. 不能序列化函数
4. 不能解决循环引用