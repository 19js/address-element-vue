# address-element-vue

> 基于elementUi的vue 省市区三级联动组件 ，返回省市id与名称

## Build Setup

``` bash
npm i address-element-vue
```
## 使用
+ 在main.js
``` bash
    import Address from "address"
    <Address :order-address="orderAddress"></Address>
```
+ orderAddress 可以自定义 是一个对象:
````
{province_id:'',province_name:'',city_id:'',city_name:'',region_id:'',region_name:''}
````
## 发布
+ npm发布的时候只发布了dist
## mysql数据库
位于mysql 文件下面
##　修改数据源
src/assets/address.json
更换以后重新打包
```$xslt
    npm run dist
```
# 源码地址 
[gitHub地址](https://github.com/yangshuanlin/address-element-vue.git)
# 其他
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
