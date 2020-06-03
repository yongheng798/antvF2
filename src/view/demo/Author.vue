<template>
	<div class="demo">
		<h1>{{title}}</h1>

		<h3><input type="text" v-model="tobrotherData" placeholder="我是给兄弟间的值"></h3>
		<h3><input type="text" v-model="toParentData" placeholder="我是给父组件定制的值"></h3>
		<ul>
			<li><button @click="toBrother" class="btn">向子组件传值</button></li>
			<li><button @click="toParent" class="btn">向父组件传值</button></li>
		</ul>
		<p></p>
		<P>这是给兄弟间的传的值：{{tobrotherData}}</P>
		<p>这是给父组件传的值：{{toParentData}}</p>
	</div>
</template>



<script>
import Children1 from '../demo_children/children1'
import Children2 from '../demo_children/children2'

export default{
	name: 'Author',
	components: {
        Children1,
        Children2
    },
	props:{share},
	data(){
		return{
			newsList: '',
			title: '',
			tobrotherData:'',
			toParentData: '',
			toChildren: '',
            getChildren: ''
		}
	},
	// 方法
	methods:{
		toBrother(){
			console.log('点击向子组件传值之前');
		},
		toParent(){
			this.$emit('toBrother',this.toBrother)
		},
		getChildrenData(data){
            this.getChildren = data
        }
	},
	computed:{

	},

}

</script