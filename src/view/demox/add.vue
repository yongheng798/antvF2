<template>
    <form action="">
        <div class="title"><input type="text" v-model="title"></div>
        <div class="content"><textarea v-model="content" cols="30" rows="10"></textarea></div>
        <div class="submit">
            <input type="button" @click="addnews()" value="添加">
        </div>
    </form>
</template>

<script>
import store from 'vuex'

export default {
    name:'add',
    store,
    data(){
        return{
            title: '',
            content: '',
        }
    },
    methods:{
        addnews(){
            
            store.commit('ADD_NEW_LIST', {
                title: this.title,
                content: this.content
            })

            this.title='';
            this.content='';
        }
    }
}
</script>
<style scoped>

</style>