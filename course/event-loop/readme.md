# 进程与线程的区别
进程： CPU在运行指令及加载和保存上下文所需要的时间
线程： 是进程中更小的单位，描述了执行一段指令所需要的时间

# JS单线程能带来什么好处？
节省内存，更安全的渲染

# 执行栈
执行栈可以认为是一个存储函数调用的栈结构

# Event Loop
微任务：process.nextTick, promise, MutationOvserver
宏任务：script, setTimeout, setInterval, setImmediate, I/O, UI-rendering

执行顺序：
    1. 首先执行同步代码，这属于宏任务
    2. 当执行完所有的同步代码后，执行栈为空，查看是否有异步代码需要执行
    3. 执行完所有的微任务
    4. 当所有的微任务执行完后，有必要的话就会渲染页面
    5. 开始下一轮的Event-Loop, 执行宏任务中的异步代码