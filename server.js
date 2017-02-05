const express=require('express');
const app=express();
const PORT=3000;

var middleWare={
	requireAuthentication:function(req,res,next){
		console.log('private route hit');
		next();
	},
	logger:function(req,res,next){
		console.log(new Date().toString()+' '+ req.method+' '+req.originalUrl);
		next();
	}
}

// app.use(middleWare.requireAuthentication);
app.use(middleWare.logger);

app.get('/about',middleWare.requireAuthentication,function(req,res){
res.send('About us');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT,function(){
	console.log(` Server started in ${PORT}`);
});