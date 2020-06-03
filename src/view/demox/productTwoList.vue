<template>
    <div>
        <ul>
            <li v-for="item in saleProducts">
                <span>{{item.name}}</span>
                <em>{{item.price}}</em>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    // props: ['products'],   通过状态vuex 传值，则不需要设置这个props来传
    computed:{
        products(){
            return this.$store.state.products;
        },
        saleProducts(){
            return this.$store.getters.saleProducts;
        }
    } 
}
</script>

<style scoped>

</style>