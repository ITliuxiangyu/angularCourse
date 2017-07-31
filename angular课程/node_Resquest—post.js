var http = require('http');
var url = require('url');
var queryString = require('querystring');
http.createServer(function(req, res) {
    // 设置接收数据编码格式为 UTF-8
    req.setEncoding('utf-8');
    res.setHeader("Access-Control-Allow-Origin", "*");
    var postData = ""; 
    // 数据块接收中
    req.addListener("data", function (postDataChunk) {
        postData += postDataChunk;
    });
    // 数据接收完毕，执行回调函数
    req.addListener("end", function () {
        console.log('数据接收完毕');
        var myUrl = JSON.parse(postData).myUrl;
        var result = '';
        http.get(myUrl,function (resquest) {
            resquest.setEncoding('utf8');
            resquest.on('data',function (data) {
                console.log(data);
                console.info();
                result += data;
            });
            resquest.on('end',function () {
                res.end(result);
            })
        }).on('error',function (e) {
            console.log(e.message);
        })
    });
}).listen(3000);
console.log("HTTP server is listening at port 3000.");