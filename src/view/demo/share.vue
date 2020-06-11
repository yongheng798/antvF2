<template>
  <div>
    <button class="btn btn-primary" @click type="button">分享到微信</button>
    <div>hello world</div>
  </div>
</template>

<script>
	export default {
		methods:{
			share(){
				this.$emit('shared')
			}
		}
	}
</script>