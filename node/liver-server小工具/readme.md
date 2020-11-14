http: 超文本传输协议, 协议 固定的格式

输入url  ->   看到页面

GET www.baidu.com HTTP/1.1
user-agent: XXX IE/chrome

上面这个格式  放到传输层(TCP, http基于TCP, 另外一个UDP)去

拿到响应

HTTP/1.1  200  OK
contnet-type: text/html
key: value



块级
- 独占一行
- 能设置宽高

行内
- 都在一行上面
- 非置换元素不能设置宽高 
- 行内置换元素是能设置宽高

img ->  行内  ->  设置宽高

置换元素
内部内容不受css控制
```html
    <img src=""/>
    <canvas />
    <input />
    <frame src="">
    <script src="">
```

非置换元素
```html
    <div>
        <div></div>
    </div>
    <span></span>
```