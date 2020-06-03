<template>
    <div>
        <hr>
        <!-- 传给兄弟间的值 -->
        <input v-model="toBrother" type="text" placeholder="我是1">

        <!-- 传给兄弟间的值的事件 -->
        <button @click="dataToBrother">toBrother</button>

        <!-- 父组件传递来的值，在这里展示 -->
        <h4>子组件1获取父组件的值：{{toChildren}}</h4>  
        
        
    </div>
</template>

<script>
import {bus} from '../eventBus/bus'
export default {
    name: 'chilren',
    props:['toChildren'], //子组件定义的一个属性
    data(){
        return{
            toBrother: ''
        }
    },
    methods: {
        dataToBrother(){
            bus.$emit('toBrother',this.toBrother)
        }
    }
}
</script>
