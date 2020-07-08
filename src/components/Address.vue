<template>
    <el-cascader
            placeholder="试试搜索：北京"
            :options="options"
            v-model="selected"
            filterable
            clearable
            size="medium"
            @change="change"
    >
    </el-cascader>
</template>

<script>
    import 'element-ui/lib/theme-chalk/index.css'
    import addressList from "../assets/address"
    export default {
        name: "addressSelect",
        data(){
            return {
                options: addressList.data,
                address:[],
                selected:[]
            };

        },
        props:{
            orderAddress:{province_id:'',province_name:'',city_id:'',city_name:'',region_id:'',region_name:''}
        },

        created(){

            if(typeof this.orderAddress!='undefined'){
                this.selected=[this.orderAddress.province_id,this.orderAddress.city_id,this.orderAddress.region_id];
                this.address=this.orderAddress;
            }

        },
        methods:{
            change:function (e) {
               this.address=this.orderAddress
                if(e.length>0){
                    this.address.province_id=e[0];
                    this.address.province_name=addressList.list[e[0]].name;
                    this.address.city_id=e[1];
                    this.address.city_name=addressList.list[e[1]].name;
                    this.address.region_id=e[2];
                    this.address.region_name=addressList.list[e[2]].name;
                }
                console.log(this.orderAddress);
            }

        }

    }

</script>

<style scoped>

</style>
