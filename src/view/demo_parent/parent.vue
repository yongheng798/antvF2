<template>
    <div class="container">
        <div class="header">
            <h1>parent</h1>
            <input v-model="toChildren" type="text">
            <h1 class="getData">获取子组件的值：{{getChildren}}</h1>
            <h3>给子组件1的值是：{{toChildren}}</h3>
        </div>

        <div class="main">
            <div class="children1">
                <Children1 :toChildren="toChildren"></Children1>
            </div>

            <div class="children2">
                
                <Children2 @toParent="getChildrenData($event)" :toChildrenDataList="toChildrenDataList" :toChildren="toChildren">

                    <p slot="solt_name1">  从solt1插槽过来的数据</p>
                    <p slot="solt_name2">  从solt2插槽过来的数据</p>
                </Children2>
            </div>
        </div>
        <ul>
            <hr>
            <p>传一个对象给子组件2</p>
            <li v-for="item in toChildrenDataList" :key="item.age">
                {{item.name}}
                <span>{{item.age}}</span>
                <em>{{item.sex}}</em>
            </li>
        </ul>
    </div>
</template>

<script>
import Children1 from '../demo_children/children1'
import Children2 from '../demo_children/children2'

export default {
    name: 'parent',
    components: {
        Children1,
        Children2
    },
    data(){
        return {
            toChildren: '哈哈哈',
            toChildrenDataList:[
                {name:'晓明',
                age: 18,
                sex:'mail'},
                {name:'aa',
                age: 12,
                sex:'yyy'},
                {name:'bbb',
                age: 16,
                sex:'xx'},
            ],
            getChildren: ''
        }
    },
    methods:{
        getChildrenData(data){
            this.getChildren = data
        }
    }
}
</script>

<style scoped>
  .container{ background: #fff;}

</style>
