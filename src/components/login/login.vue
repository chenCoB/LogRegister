<template>
	<div class="login">
	<Spin v-if='Spin' style="z-index:9999" class="loading"></Spin>
	<header>
	  <img src="../../images/header_login.png"/>	
     <img src="../../images/login_inite.png"/>		
	</header>	

	<div class="facebook">SIGN IN WITH FACEBOOK</div>
	<div class="google">SIGN IN WITH GOOGLE</div>
	<div style="text-align: center;margin:14px 0">OR</div>
	<Input type="text" v-model="information.user" style="width:70%;margin:4% auto;display: block;" placeholder="Email login"></Input>
	<Input type="password" v-model="information.password" style="width:70%;margin:0 auto;display: block;" placeholder="Password"></Input>
	<div style="width:70%;margin:3% auto;text-align:right">
		<router-link to="/registered">Go to Foo</router-link></div>
	<Button @click="login()" style="background: #92a8d1;color:#fff;width:40%;margin:0 auto;display: block;margin-top:5%;border:none;padding:2.2%;">LOG IN</Button>

	<div style="text-align: center;margin-top:3%">Don’t have an account? <a>Sign up</a></div>
	</div>
</template>

<script>
import {Input,Button,Message,Spin} from 'iview';

import axios from"axios";

export default {

	data(){
		 return{
	     	Spin:false,
		 	information:{
		 		user:"",
		 		password:"",
		 	}
		 }
	},

	methods:{
		login(){
			axios.post("/api/login",this.information)
			.then((res)=>{
				console.log(res)
				if(res.data.code==0){
				Message.warning(res.data.err)
					 return false;
				}
				if(res.data.code==1){
					console.log(res.data.err)
					 Message.success(res.data.err)
					 this.Spin= true;
					 setTimeout(()=>{
					  this.$router.push('/index')
					},1500)
					return false;
				}
				
			})
		}
  
	},
	computed:{
		inot(){
		 return this.$store.state.count
	
		}
	},

	components:{
		Input,
		Button,
		Message,
		Spin
		
	}
}
</script>

<style>
.login{
	position: relative;
}
.login header{
	margin-top:20px;
	text-align: center;
}
.login header img{
	display: block;
		margin:0 auto;
	margin-top:14px;

}
.loading{
	position:absolute;
	left:50%;
	top:50%;
	margin-left:-10px;
	margin-top:-10px;
}
.google,
.facebook{
	width:60%;
	margin:0 auto;
	padding:2%;
	text-align:center;
	color:#fff;
	font-size:12px;
	border-radius: 4px;
}
.google{
	background:#f7cac9;
	
}
.facebook{
	background: #92a8d1;
	margin-top:20px;
	margin-bottom:10px;
}
</style>