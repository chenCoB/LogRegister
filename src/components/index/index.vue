<template>
	<div class="icContent">
		<div class="header">
		 <a class="action"><Icon type="android-favorite"></Icon><span>推荐热点</span></a>
		 <a><Icon type="beer"></Icon><span>新闻热点</span></a>
		 <a><Icon type="bug" ></Icon><span>娱乐新闻</span></a>
		  <a><Icon type="social-octocat"></Icon><span>个人中心</span></a>
         </div>
  <div class="column">
  	 <router-view></router-view>
  	
  </div> 
   
	</div>
</template>

<script>
import {Icon} from 'iview';
	export default {
	data(){
			return{
				theme1: 'light',
			}
		},
		
		methods:{
			
		},
		components:{
	Icon
		}
		
	}
</script>

<style>
	.header{
		display: flex;
			margin-bottom:10px;
	}
	.header a{
		flex: 1;
		text-align:center;
		padding:16px 0;
	
				color:#495060;
					border-bottom: 2px solid #fff;
		
	}
	.header a span{

		font-size:14px;
		margin-left: 4px;
	}
	.header .action{
		color:#2d8cf0;
		border-bottom: 2px solid #2D8CF0;
	}
</style>