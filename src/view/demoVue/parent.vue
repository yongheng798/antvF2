<template>
    <div id="app">
        <!-- 子组件 -->
        <users :users="users" v-on:titleChanged="updateTitle"></users>
        <!-- 接收子组件的传值 -->
        <h3>{{title}}</h3>
    </div>
</template>

<script>
export default {
    // 引入子组件
    import children from "chilren";

    name: 'parent',
    data(){
        return{
            users: ['henry', 'bucky', 'emily'],
            title: '传递的是一个值'
        }
    },
    components:{
        children,
    },
    methods:{
        updateTitle(e){
            this.title = e;
        }
    }

}
</script>

<style scoped>

</style>