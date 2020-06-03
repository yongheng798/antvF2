<template>
    <div>
        <ul>
            <li v-for="item in newslist" :key="item.index">
                <router-link to="{path:info:/item.index}">{{item.title}}</router-link>
                <p>{{item.content}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'list',
    data(){
        return{
            newslist:'',
        }
    },
    computed:{
        //newslit = this.$store.newslist
    }
}
</script>
<style scoped>

</style>