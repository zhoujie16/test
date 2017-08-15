var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

http.createServer(function(req, res) {
    if(req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.uploadDir = './uploads';
        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {
                'content-type': 'text/plain'
            });
            res.write('received upload:\n\n');
            res.end(util.inspect({
                fields: fields,
                files: files
            }));
        });
        return;
    }

    // show a file upload form
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.end(
        `
        	<!DOCTYPE html>
		<html lang="en">
		
		<head>
		    <meta charset="UTF-8">
		    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		    <title>文件上传</title>
		</head>
		
		<body>
		    <form action="/upload" enctype="multipart/form-data" method="post">
		        <input type="text" name="title">
		         
		        <input type="file" name="upload" multiple="multiple">
		         
		        <input type="submit" value="上传">
		    </form>
		
		</body>
		
		</html>
        `
    );
}).listen(3000);