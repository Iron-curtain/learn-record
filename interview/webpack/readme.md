# 常见的loader有哪些，你用过哪些
css-loader      加载css
style-loader    把css注入js中
less-loader     加载less
vue-loader      加载vue.js单文件
babel-loader    es6 -> es5
eslint-loader   通过eslint检查js代码

# 有哪些常见的plugin? 你用过哪些？
html-webpack-plugin
clean-webpack-plugin 目录清理
mini-css-extract-plugin 分离样式文件，css提取为独立的文件

# loader 和 plugin 有什么区别
webpack只能识别js，loader起到翻译官的作用，将其他的资源进行转义处理(本质上是函数，并不会拓展webpack的功能)
plugin是插件，可以拓展webpack的功能，在webpack运行的生命周期中拓展事件

# webpack构建的简单流程
1. 初始化参数
2. 开始编译  (加载配置的插件)
3. 确认入口 (entry)
4. 编译模块 (module)
5. 完成模块编译
6. 输出资源 (output)
7. 完成输出 (把打包好的内容输出到文件系统)

# 使用webpack开始时，用过哪些可以提高效率的插件
webpack-dashboard  更友好地展示打包信息
webpack-merge      提取公共配置，减少重复的的配置代码
hotModuleReplacePlugin    模块热替换
size-plugin       监控资源体积变化，尽早发现问题

# source map 是什么？生产环境中怎么用
将打包压缩编译之后的代码映射会源代码的过程，为了在压缩之后还能很好的调试代码

hidden-source-map: 借助第三方错误监控平台$entry使用
sourcemap  通过nginx设置将.map文件只对白名单开放(公司内网)

# webpack 热更新的原理
HMB核心就是客户端从服务端去拉取更新后的文件
1. 服务端和客户端维护了一个webSocket连接
2. 当本地资源变化的时候，WDS就会像浏览器推送更新，并且带上hash
3. 客户端对比上一次的资源发现真的有更新
4. 客户端发ajax请求获取更新的内容