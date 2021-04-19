# css 盒模型
w3c标准盒模型：width
IE盒模型宽度：width + padding + border
box-sizing: content-box | border-box


# 画 0.5px 的线
1. transform: scale(0.5)
2. border-image
3. linear-gradient


# link标签import标签的区别
@import
link标签是html标签，@import是css提供
link会在页面加载的时候同时加载，@import引入的css会在页面加载完成后再加载
link没有兼容性问题，@import必须IE5以上才能识别
link的权重比@import高



# transition 和 animation区别
1、animation 其实也叫关键帧，通过和 keyframe 结合可以设置中间帧的一个状态；transition 是过渡，是样式值的变化的过程，只有开始和结束；
2、animation配合 @keyframe 可以不触发事件就触发这个过程，而 transition 需要通过 hover 或者 js 事件来配合触发；
3、animation 可以设置很多的属性，比如循环次数，动画结束的状态等等，transition 只能触发一次；
4、animation 可以结合 keyframe 设置每一帧，但是 transition 只有两帧；


# flex 布局
传统布局 = 依赖display + position + float，这种在特殊布局中非常不方便，比如垂直居中
flex-direction: row  |  column 决定主轴的方向
flex-wrap: nowrap | wrap  决定换行规则


# BFC
块级格式化上下文，是一个独立的渲染区域，有一定的布局规则
BFC区域不会与float box重叠
BFC是页面上的一个独立容器，子元素不会影响外面


# 怎么生成BFC:
flaot不为none
position为flex和absolute
display为inline-block, flex, table-cell
overflow不为visible


# 垂直居中的方法
position
flex
margin (知道父容器的宽高)
table-cells (父)    vertical-align: middle (子容器)


# js动画和css动画有什么差异
渲染进程分为 main thread 和 compositor thread
如果css动画只改变transform和opacity, 这时css动画得以在compositor thread完成
而js动画一定会在main thread执行
区别：
  功能涵盖面，js 比 css 大
  css 比 js 更简单，性能会更好
  对帧表现不好的低版本浏览器，css3可以做到自然降级
  css动画有天然的事件支持
  css3有兼容性问题

# 块级元素和行内元素
块级：独占一行，并自动填满父元素，可以设置margin, padding, width, height
行内：不能独占一行，width, height会失效，并且垂直方向的padding和margin会失效

# 多行文本的省略号
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient：vertical;
overflow: hidden;
text-overflow: elipsis;

# 清除浮动
1. 使用带clear属性的空元素
2. overflow
3. 给浮动元素的父元素添加浮动
4. css的 ::after 伪元素


# css3的新特性


# css选择器有哪些？优先级呢
id 选择器， class 选择器， 标签选择器， 伪元素选择器， 伪类选择器， 属性选择器

!important  >   内联样式    >   内部样式    >   外部样式    >   浏览器用户自定义    >   浏览器默认样式


# float 的元素，display是什么
  none

# 三栏布局的实现
https://www.jianshu.com/p/81ef7e7094e8
圣杯，双飞燕
三列布局：
1. flex
2. 两列定宽，一列自适应： float + margin    
  display: table
3. display: grid

# display: table  和  table本身有什么区别
display: table声明能够让html元素和它的子节点像table元素一样使用，但是文件会比table小，div + css 是逐行显示，
         table是页面完全加载后才显示

# 设置一个元素的背景色，背景色会填充哪些区域
  content  +  padding  +  border

# inline-block, inline和block的区别；为什么img是inline还可以设置宽高
block：可以设置宽高，padding   margin     默认占据一行
inline: 不可以设置宽高  可以设置padding    margin只能设置水平
inline-block: 不会默认占据一行


# 重绘 和  回流 (重绘)

# css画三角形


# css  布局种类
圣杯布局  双飞翼布局  flex布局    表格布局    网格布局
