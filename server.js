const express=require('express');
const app=express();
const PORT=process.env.PORT||3000;
const middleWare=require('./middleware.js');

// app.use(middleWare.requireAuthentication);
app.use(middleWare.logger);

app.get('/about',middleWare.requireAuthentication,function(req,res){
res.send('About us!');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT,function(){
	console.log(` Server started in ${PORT}`);
});