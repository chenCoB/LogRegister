<template>
	<div class="registered">
		<div class="bg_img">
		<Input type="text"  style="width:70%;margin:4% auto;display: block;;" placeholder="Email login" v-model="apply.user"></Input>

		<RadioGroup v-model="apply.animal"  style="width:70%;margin:4% auto;display: block;">
        <Radio label="Mr."></Radio>
        <Radio label="Ms."></Radio>
        <Radio label="ThirdKind"></Radio>
    </RadioGroup>
  
    
			<Input type="password" v-model="apply.pssword" style="width:70%;margin:4% auto;display: block;" placeholder="Password"></Input>
				<Input type="password" v-model="apply.pwd" style="width:70%;margin:0 auto;display: block;" placeholder="Confirm password"></Input>
				<Button @click="registered()" style="background: #92a8d1;color:#fff;width:40%;margin:0 auto;display: block;margin-top:5%;border:none;padding:2.2%;">Regis Tered</Button>
				</div>
	</div>
</template>

<script>
import {Input,Button,RadioGroup,Radio,Message} from 'iview';
import axios from"axios";
	export default {
		data(){
			return{
				apply:{
					user:"",
			        animal:"Mr.",
					pssword:"",
					pwd:"",
				},
				err:"注册失败，用户名重复"
			}
		},
	
		methods:{
			warning(){
				Message.warning("w(ﾟДﾟ)w  两次密码不一样")
			},
			error(){
				Message.error(this.err)
			},
			registered(){
				
			  if(this.apply.pssword!=this.apply.pwd){
			      this.warning()
			      return false;
			  }
			  	axios.post("/api/registered",this.apply)
				.then((res)=>{
				if(res.data.code==0){
					this.err = res.data.err;
					this.error()
					}
				if(res.data.code==1){
					 Message.success(res.data.err)
					setTimeout(()=>{
						 this.$router.push('/login')
					},2000)
				}
				})
				
				.then(function(){
					
				})
				.then(()=>{
					
				})
				.catch((err)=>{
					console.log(err)
				})
			},
		},
		
		components:{
			Input,Button,RadioGroup,Radio,Message
		}
	}
</script>

<style>
	.registered{
		width:100%;
		height:100%;
		background: url(../../images/bg.jpg) no-repeat;
		background-size: 100% 100%;
		padding-bottom:2px;
		position: fixed;
	}
	.bg_img{
		width:100%;
		height:100%;
		overflow: hidden;
		background:rgba(146,168,209,0.5)
	}

</style>