<template>
    <ChildrenA></ChildrenA>
    <ChildrenB></ChildrenB>
    <ChildrenC></ChildrenC>
</template>

<script>
import ChildrenA from 'ChildrenA'
import ChildrenB from 'ChildrenB'
import ChildrenC from 'ChildrenC'
export default {
    name:'parent',
    props:{
        
    },
    components:{
        ChildrenA,
        ChildrenB,
        ChildrenC
    },
    mixins:[],
    data(){
        return{

        }
    },
    mounted(){},
    computed(){},
    methods(){}
}
</script>

<style lang="less" scoped>

</style>