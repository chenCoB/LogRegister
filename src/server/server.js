var  express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require("body-parser")
var CryptoJS     = require('crypto')   //md5加密
var os          = require("os")
var net = require("net")


var b= os.networkInterfaces();

app.use(bodyParser.urlencoded({    
  extended: true
}));
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/vue")
mongoose.connection.on("connected",function(){
  console.log("成功连接")
})
var User = mongoose.model('user', new mongoose.Schema({
	user:{type:String,require:true},
	animal:{type:String,require:true},
		pssword:{type:String,require:true},
		pwd:{type:String,require:true}
}))

/*创建新闻信息*/
var DateContent = mongoose.model('dataInfo', new mongoose.Schema({
	user:{type:String,require:true},
	Date:{type:Object,require:true},
		ImgUrl:{type:Object,require:true},
		content:{type:String,require:true}
}))


app.get("/dateContent",function(req,res){
	      DateContent.find({},function(err,doc){
	      	res.send(doc)
	      })
})


app.post("/registered",function(req,res){
 
	if(req.body.user===""){
		res.send({code:0,err:"ε=(´ο｀*))) 请输入用户名"})
		return false;
	}
	  User.findOne({"user":req.body.user},function(err,doc){
	  	  if(doc){
	  	  	res.send({code:0,err:"ε=(´ο｀*))) 用户名重复了哦"})
	  	    return false;
	  	  }
	  	  User.create({"user":req.body.user,"animal":req.body.animal,"pssword":MD5(req.body.pssword),"pwd":MD5(req.body.pwd)},function(err,doc){
	  	  	    if(err){
	  	  	    	console.log(err)
	  	  	    	return false;
	  	  	    }
	  	  	    if(doc){
	  	  	    	res.send({code:1,err:"恭喜你，注册成功"})
	  	  	     return false;
	  	  	    }
	  	  	    
	  	  })
	  })
})

app.get("/datas",function(req,res){

	    User.find({},function(err,doc){
	    	res.send(doc)
	    })
})
app.get("/remove",function(req,res){
	     User.remove({},function(err,doc){
	     res.send(doc)
	     })
	
})
app.post("/login",function(req,res){

 User.find({"user":req.body.user},
      function(err,doc){
        
        	if(err){
        	 
        	 res.send({code:0,err:"(ｷ｀ﾟДﾟ´)!!用户名或密码错误"})
        	 return false;
        	}
         if(doc.length==0){
         	 res.send({code:0,err:"(ｷ｀ﾟДﾟ´)!!用户名或密码错误"})
         	 return false;
         }else{
         	 res.send({code:1,err:"☆(￣▽￣)/$:*好棒登录成功"})
         }
        
        })
	
})


app.listen(3000,function(){
	console.log("服务器连接3000开启成功")
})
function MD5(pwd){
const saltpassword = "@$34343242123#468dfsadsad"
	    const md5 = CryptoJS.createHash("md5");
	    const md5m  = md5.update(pwd+saltpassword).digest("hex");
	  
	    return md5m;
	  
}
