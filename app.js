
var express=require('express');
var http=require('http');
var conr=require('./conr.js');

var app = express();

app.set('port',8081);
app.use(express.static(__dirname+"/public"));
app.use(express.bodyParser());


if ('development' == app.get('env')) {
    app.use(express.errorHandler());
};

http.createServer(app).listen(app.get('port'),function(){
    console.log("监听开始 ！"+app.get('port'));
});

app.post('/ajax',conr.connet);
app.get('/ajax',conr.connet);
