# 饿了么点餐系统（商家页面）
> 今年更新了Vue2.0，虽然平时也用Vue写东西，但是还没用它写过稍微大一点的项目，心血来潮本来想写饿了么的,  <br/>但是咋一看这工作量和代码量，冷静下来想了想还是退而求其次，取出其中比较有特点和代表性的商家页面即饿了么点餐系统来练手，该  <br/>项目主要是通过组件化的思想来构建一个App,其中最关键的也最难的就是组件间的通信，通过组件间的通信实现数据的传递。

## 技术栈
+ Vue2.0: 采用最新Vue2的语法
+ Vue Resource: 发起http请求
+ VUe Router: 管理单页面应用路由
+ webpack: 自动化构建工具，主要配置vue-cli脚手架提供
+ stylus: css预处理语言
+ ES6:框架中常用语法
+ better-scroll: 移动端滚动插件

## 功能/组件
- [x] 购物车（shopcart）
- [x] 评分（ratings）
- [x] 商品数量添加，删除组件（cartcontrol）
- [x] 商家首页目录，列表的联动
- [x] 评论筛选（ratingSelect）
- [x] 商品列表页面
- [x] 店铺评价页面
- [x] 商家介绍页面
- [x] 商品详情页面
- [x] 画廊（header）

## 项目心得
> 从这个项目一路走来，感触最深的就是组件化思想和组件间的通信，写组件不难，难的是如何去分析一个项目从中提取出可以作为组件的部分，提高其复用性，不只是在本项目中可以用，可能其他项目中也会用到，这才能发挥组件的最大  <br/>作用，否则不过是将一个页面拆分开而已，跟之前没有组件那也没多大区别了。其次就是要深刻理解组件间的通信原理,  <br/>这样才能从容的在父子组件间传递我们想要传递的数据，从而实现我们的需求。

## 安装步骤
+ clone项目到本地，然后安装项目依赖
<br/> *npm install*
+ 启动服务
<br/> *npm run dev*
<br/> 项目即可运行

## 项目截图
![elem项目截图_1](https://github.com/xueyanboliang/my-pics/blob/master/elem/elem.gif?raw=true)
![elem项目截图_2](https://github.com/xueyanboliang/my-pics/blob/master/elem/elem_2.png?raw=true)
![elem项目截图_3](https://github.com/xueyanboliang/my-pics/blob/master/elem/elem_3.png?raw=true)
![elem项目截图_4](https://github.com/xueyanboliang/my-pics/blob/master/elem/elem_4.png?raw=true)
![elem项目截图_5](https://github.com/xueyanboliang/my-pics/blob/master/elem/elem_5.png?raw=true)
![elem项目截图_6](https://github.com/xueyanboliang/my-pics/blob/master/elem/elem_6.png?raw=true)
![elem项目截图_7](https://github.com/xueyanboliang/my-pics/blob/master/elem/elem_7.png?raw=true)
![elem项目截图_8](https://github.com/xueyanboliang/my-pics/blob/master/elem/elem_8.png?raw=true)
