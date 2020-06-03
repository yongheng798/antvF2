<template>
    <div>
        <input v-model="toParentData" type="text" placeholder="我是2">
        <button @click="dataToParent">ToParent</button>
        <!-- 兄弟间传值 -->
        <h1>{{dataFromBrother}}</h1>
        <h3>我是子组件2，接收父组件对象列表</h3>
        <ul>
            <li v-for="item in toChildrenDataList" :key="item.age">{{item.name}}</li>
        </ul>

        <p>子组件2获取父组件的值：{{toChildren}}</p>

        <slot name="solt_name1">aaa:{{slot1}}</slot>
        <slot name="solt_name2">BBB:{{slot2}}</slot>
    </div>
</template>

<script>
import {bus} from '../eventBus/bus'

export default {
    name: 'children2',
    props:[
        'toChildren',
        'toChildrenDataList'
        ], //子组件定义的一个属性
    data(){
        return{
            toParentData: '',
            dataFromBrother: '',
            toChildrenDataList: '',
            slot1:'slot1 data',
            slot2: 'slot2 data,中文哦'
        }
    },
    created(){
        bus.$on('toBrother',(data) => {
            this.dataFromBrother =data
        })
    },
    methods: {
        dataToParent(){
            this.$emit('toParent', this.toParentData)
        },
        slot_todo(){
            console.log('我是插槽');
        }
    }
}
</script>
