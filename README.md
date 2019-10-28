# address-element-vue

> 基于elementUi的vue 省市区三级联动组件 ，返回省市id与名称

## Build Setup

``` bash
npm i address-element-vue
```
## 使用
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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
