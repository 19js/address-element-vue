<template>
  <div id="app">
    <address-select :order-address="orderAddress"></address-select>
    <button @click="sure">确定</button>
  </div>
</template>

<script>
 import {Address} from './index'
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
    created(){
    }
    ,methods:{
      sure(){
          console.log(this.orderAddress)
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
