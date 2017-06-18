var express = require('express');
var app = express();
var fs=require("fs");
var path=require('path');

//设置资源文件
app.use(express.static(path.join(__dirname,'static')));


//启动服务器
var server = app.listen(8099, function (req,res){
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})


