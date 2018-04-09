var http = require('http');  
var url = require('url');  
var createServer = http.createServer(onRequest);  
  
function onRequest(request, response) {  
    response.writeHead(200, {  
        'Content-Type': 'text/plain',  
        'Access-Control-Allow-Origin': '*'  
    });  
    var str = JSON.stringify(url.parse(request.url, true).query);
    //通过json的方式解析url请求
    response.write(str);  
    response.end();  
}  
createServer.listen(8080);  
console.log('Server running  at http://127.0.0.1:8080/');  
