<template>
    <form action="" v-if="!isLogn">
        <div>用户名：<input type="text" v-model="username"></div>
        <div>密码：<input type="password" v-model="password"></div>
        <div><button @click="login()">登陆</button></div>
        <div><button @click="register()">注册</button></div>
    </form>
    <form action="" v-else>
        <div>用户名：<input type="text" v-model="username" placeholder="用户名"></div>
        <div>密码：<input type="password" v-model="password" placeholder="密码"></div>
        <div>再次输入密码：<input type="password" v-model="secondpsw" placeholder="再次输入密码"></div>
        <div><button @click="register()">注册</button></div>
        <div><button @click="goback()">返回</button></div>
    </form>
</template>


<script>
// import {vuex} from 'vuex'
export default {
    name:'login',
    data(){
        return{
            isLogin:true,
            username:'',
            password:'',
            secondpsw:''
        }
    },
    computed:{
        isLogin(){
            let username = this.username;
            let password = this.password;
            let session_username = sessionStorage.getItem(username);
            let session_passwrod = sessionStorage.getItem(password);
            if(username===session_username && session_passwrod === session_passwrod){
                this.$router.push('demo_home');
            }else{
                alert('用户名或密码不正确')
            }
        },
        register(){
            isLogin: false;
            let username = this.username;
            let password = this.password;
            let secondpsw = this.secondpsw;
            if(password!=secondpsw){
                alert('两次密码输入不一致');
            }else{
                // 放入本地存储
                sessionStorage.setItem(username,username);
                sessionStorage.setItem(password,password);
            }
        }
    },
    methods:{
        
    }

}
</script>
<style scoped>

</style>