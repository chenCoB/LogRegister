<template>
	 <div class="recommended">
	    <div class="Caro">    
	    	<Carousel v-model="value1" :loop='true' :autoplay="true">
        <CarouselItem>
            <div class="demo-carousel">
            	<a><img src="../../images/hd.png"/> </a>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
            	<a><img src="../../images/hshb.png"/> </a>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
            	<a><img src="../../images/wycs.png"/> </a>
            	
            </div>
        </CarouselItem>
    </Carousel>
	    </div>
	    <div class="column_list">
	    	<ul>
	    		<li v-for="(item, index) in listData">
	    			<router-link :to="{ path:'/details', query: { num: 1} }"> 
	    			<h2>{{item.content}}</h2>
	    			<div class="listImg">
	    				<span v-for="url in item.ImgUrl">
	    					<img v-bind:src="'http://localhost:8080/'+url"/>
	    				</span>
	    		
	    				
	    			</div>
	    			
	    		<div class="listName">
	    			<span>作者:<i>{{item.user}}</i></span>
	    			<span>日期:<i>{{item.Date}}</i></span>
	    	   </div>	
	    	   </router-link>
	    		</li>
	    		
	    	</ul>
	    </div>
	    
	 </div>
	
</template>

<script>
	import {Carousel,CarouselItem} from 'iview';
	import axios from"axios";
	export default{
		data(){
			return{
				value1: 0,
				listData:"",
				
			}
		},
		computed:{
			
		},
		
		created(){

		
		axios.get("/api/ss")
		.then((res)=>{
			
			[this.listData] = [res.data]
		console.log(res.data[0]._id)
		})
		
		
		axios.get("/api/dateContent")
		.then((res)=>{
			
			[this.listData] = [res.data]
		console.log(res.data[0]._id)
		})
		 
		
		},
	
	  components:{
	  	Carousel,CarouselItem
	  }
	  
	}
	
</script>

<style>
	.demo-carousel a img{
		width:100%;
		height:160px;
	}
		.column_list ul li {
			padding:2%;
		}
	.column_list ul li h2{
    font-size:14px;
	font-weight: 400;
	color:#1c2438
	}
	.listImg{
		display: flex;
		margin:2% 0;
	}
	.listImg span{
		flex: 1;
		height:60px;
		margin-right:2%
	}
	.listImg span:last-child{
		margin-right: 0;
	}
	.listImg span img{
		width:100%;
		height:100%;
	}
	
	.listName{
		overflow:hidden;
	}
	.listName span{
		float:right;
	}
	.listName span:first-child{
		float:left;
	}
</style>