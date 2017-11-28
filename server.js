var express = require('express');

var app = express();

app.set('port',process.env.PORT || 3000);


app.get('*',function(req,res){
    res.type('text/plain');
    res.status(200);


    res.json(req.headers);
});
app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('没有找到路径：' + req.path);
});
app.listen(app.get('port'),function(){
	console.log('Server Started on http://localhost:' + app.get('port') +'按Ctrl + C 退出');
});
