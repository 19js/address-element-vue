import Vue from 'vue'
import {Cascader} from 'element-ui'
Vue.use(Cascader)
import Address from './components/Address'
let comment={};
comment.install=function (Vue) {
    Vue.component(Address.name,Address)
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment)
}
export default comment