<template>
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
</template>

<script>
// 引入组件
import productOneList from 'productOneList'
import productTwoList from 'productTwoList'

export default {
    name: 'productlist',
    components:{
        'product-list-one':productOneList,
        'product-list-two':productTwoList
    },
    data(){
        return{
            products:[
                {name:'码云',price:200},
                {name:'小飞飞',price:200},
                {name:'爱马仕',price:120},
                {name:'马化腾',price:20},
                {name:'东方不败',price:10}
            ]
        }
    }
}
</script>