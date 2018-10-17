## css 布局

1. 横向

2. 纵向


## a 标签

1. target
2. download
3. href
	<a href="//qq.com"></a> 使用当前的协议访问 qq.com
	`<a href="#sdfs"></a> 锚点`
	<a href="?name=xxx"></a> 向当前地方发送一次请求（附带参数）
	<a href="javascript: alert(1);">QQ</a> 伪协议
	<a href="javascript:;">QQ</a> 点击之后不跳转

# iframe

frameborder=0

name 属性和 a 配合使用


## 安装 http server
`npm i -g http-server`

`http-server -c-1` 不缓存

## form
target 属性

# label
包裹 input 可以省去 id

# css
@import


# 横向布局
1. 所有子元素添加 float: left
2. 父元素添加 clearfix

# 元素的高度由什么决定？

由其内部文档流元素的高度总和决定。

# 什么是文档流

文档内元素的流动方向。

内联元素从左往右流动。
块级元素从上往下流动。（每个元素占一行）

word-break: break-all break-word 英文默认不会被切断

内联元素的高度几乎不可控，通过 line-height 来控制。


# 脱离文档流

position: fixed;  相对于屏幕定位，不再占一行了，所以要加 width: 100%

# line-box 是啥
# box 是啥
# 宽度是由什么决定的
# position 的 5 个取值
# z-index
