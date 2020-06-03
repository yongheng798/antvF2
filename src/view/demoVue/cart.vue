<template>
    
</template>

<script>
export default {
    name: 'cart',
    props:{},
    data(){
        return{
            lists: []
        }
    },
    watch:{

    },
    computed:{
        totalCount: function(){
            let n = 0;
            this.lists.forEach(function(item){
                n+= item.count;
            })
        },
        totalPrice:function(){
            let n = 0;
            this.lists.forEach(function(item){
                n+=item.count*item.price;
            })
            return n
        },
        searchData:function(){
            return lists.filter(function(item,index){
                return item.name.includes(this.input);
            });
        }
    },
    methods:{

    },
    mounted(){

    },
    filters:{   //过滤器 用于文本格式化
        priceFilter(data){
            return `￥ ${data.toFixec(2)}`;
        },
        toNumber(data){
            return Number(data);
        }
    }
}
</script>

<style lang="less" scoped>

</style>