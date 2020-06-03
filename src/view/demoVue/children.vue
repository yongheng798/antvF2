<template>
    <div class="hello">
        <ul>
            <li v-for="item in users" :key="item.index">
                {{item}}
            </li>
        </ul>
        <!-- 子组件向父组件传值（通过事件形式） -->
        <header>
            <h3 @click="changeTitle">{{title}}</h3>
        </header>
    </div>
</template>

<script>
export default {
    name: 'children',
    props:{
        users:{
            type: Array,
            requered: true
        }
    },
    data(){
        title: 'hello vue'
    },
    methods:{
        changeTitle(){
            // 自定义事件， 子向父组件传值
            this.$emit('titleChanged','子向父组件传值');
        }
    }
}
</script>