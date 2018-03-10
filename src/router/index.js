import Vue from 'vue';
import Router from 'vue-router';
import login from '../components/login/login'
import registered from '../components/registered/registered'
import index from '../components/index/index'
import recommended from '../components/column/recommended'
import details from '../components/column/details'
Vue.use(Router)
const router = new Router({
 mode: 'history',
	 mode:"history",
    routes:[
	{path:"/login",name: 'login',component:login},
	{path:"/registered",name: 'registered',component:registered,meta:{auth:true}},
	{path:"/index/:id",name: 'index',component:index,meta:{auth:true},
	children:[{
		path:'/index/recommended',
		name:'recommended',
		component:recommended
	}]
	},
	{path:"/details",name: 'details',component:details,meta:{auth:true},
	children: [
	{ path: "/details/:id", component: details }
	]
	},
	
	
	]
	
})
router.beforeEach((to,fom,next)=>{

	next()
	
})
export default router
