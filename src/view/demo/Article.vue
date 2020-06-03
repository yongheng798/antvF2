<template>
	<div class="container">
		<h1>{{title}}</h1>
		<p>分享次数：{{}}</p>
		<P>发表于{{date | moment}}</P>
		<p class="lead" v-html="content">
		</p>

		<app-author :article-name = "name"></app-author>
		<app-share></app-share>

	</div>
</template>


<script>
	import moment from '../demo/Announcement'
	import Author from '../demo/Author'
	import Share from '../demo/share'

	export default{
		data(){
			return {
				title:'震惊！！！',
				date: new Date(),
				content: '发呆了街坊邻居'
			}
		}
	}

</script>