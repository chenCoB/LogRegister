<template>
	
	 <div class="details">
	 	  <h1>标题</h1>
	 	  <div class="details_content">
	 	  	  内容
	 	  	
	 	  </div>
	 	
	 </div>
	
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		created(){
			console.log(this.$route.query.num)
		}
	}
</script>

<style>
</style>