var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('收到请求:' + pathname);
    fs.readFile(pathname.substr(1), function(err, data) {
        if(err) {
            console.log(err);
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data.toString());
            res.end();
        }
    });
}).listen(8081, function() {
    console.log('服务建立');
});;