# address-element-vue

> 基于elementUi的vue 省市区三级联动组件 ，返回省市id与名称

## Build Setup

``` bash
npm i address-element-vue
```
## 使用
``` bash
全局使用
main.js
import Address from 'address-element-vue'
Vue.use(Address)
局部使用 
import {Address} from 'address-element-vue'
components: {
           addressSelect: Address
      },
示例：
   <template>
     <div id="app">
       <address-select :order-address="orderAddress"></address-select>
       <button @click="sure">确定</button>
     </div>
   </template>
   
   <script>
   import {Address} from 'address-element-vue'
   export default {
     name: 'App',
       data(){
         return {
             orderAddress:{city_id: 110001,
                 city_name: "北京市",
                 province_id: 110000,
                 province_name: "北京市",
                 region_id: 110101,
                 region_name: "东城区"}
         }
     },
     components: {
          addressSelect: Address
     },
       ,methods:{
         sure(){
             console.log(this.orderAddress)
           }
       }
   }
   </script>
```
+ orderAddress 可以自定义 是一个对象:
````
{province_id:'',province_name:'',city_id:'',city_name:'',region_id:'',region_name:''}
````
# 获取与更改数据库
+ sql文件位于mysql/bd_area.sql
+ 组件引用的省市区地址文件位于 src/assets/address.json
+ 以下为php代码导入数据库，以及生成address.json文件的示例
````php
//将address.json文件导入数据库
 public static function initData(){
       $data=file_get_contents("./address.json");
       $datas=json_decode($data,true);
       $temp=[];
       foreach ($datas as $vo){
           $temp[]=['id'=>$vo['code'],'name'=>$vo['name'],'pid'=>0,'level'=>1];
           if($vo['cityList']){
               foreach ($vo['cityList'] as $v){
                   if($v['code']==$vo['code']){
                       $code=$v['code']+1;
                   }else{
                       $code=$v['code'];
                   }
                   $temp[]=['id'=>$code,'name'=>$v['name'],'pid'=>$vo['code'],'level'=>2];
                   if($v['areaList']){
                       foreach ($v['areaList'] as $val){
                           $temp[]=['id'=>$val['code'],'name'=>$val['name'],'pid'=>$code,'level'=>3];
                       }
                   }
               }
           }
       }
       self::insertAll($temp);
   }
//生成address.json
   public static function getVueJson(){
      $res= self::select();
      $temp=[];
      $temp1=[];
      $temp2=[];
      foreach ($res as $vo){
          $temp1[$vo['id']]=$vo;
          if($vo['pid']==0){
              $temp[$vo['id']]=['value'=>$vo['id'],'label'=>$vo['name'],'id'=>$vo['id']];
          }else{
              if($vo['level']==2){
                  $temp[$vo['pid']]['children'][]=['value'=>$vo['id'],'label'=>$vo['name'],'id'=>$vo['id']];
              }
              if ($vo['level']==3){
                  $temp2[$vo['pid']][]=['value'=>$vo['id'],'label'=>$vo['name'],'id'=>$vo['id']];
              }
          }
      }
    foreach ($temp as &$vo){
          if(isset($vo['children'])){
              foreach ($vo['children'] as &$v){
                  if(isset($temp2[$v['id']])){
                      $v['children']=$temp2[$v['id']];
                      unset($temp2[$v['id']]);
                  }
              }
          }
    }
   return file_put_contents('addressListsForVue.json',json_encode(['data'=>array_values($temp),'list'=>$temp1]));
   }
````
# 发布说明
## 1.0.10
+ 添加局部引用功能
## 1.0.9
无效
## 1.08 
+ 新增源码连接
+ [GitHub地址](https://github.com/yangshuanlin/address-element-vue.git)
## 1.0.7
+ 修改1.0.5为解决的问题
+ 修改因为未正确引入地址而导致无法初始化数据的问题
## 1.0.6
+ 修复因webpack引起的路由加载问题
## 1.0.5
+ 修改因为未正确引入地址而导致无法初始化数据的问题

#　源码地址 
[GitHub地址](https://github.com/yangshuanlin/address-element-vue.git)
