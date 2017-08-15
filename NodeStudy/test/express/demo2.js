var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');

var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(multer({
    dest: '/tmp/'
}).array('image'));
app.get('/', function(req, res) {
    console.log('主页 GET 请求');
    res.send('Hello GET');
});
app.post('/', function(req, res) {
    console.log('主页 POST 请求');
    res.send('Hello POST');
});

app.get('/del_user', function(req, res) {
    console.log('/del_user 响应 DELETE 请求');
    res.send('用户列表页面');
});
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
});
app.get('/update.html', function(req, res) {
    res.sendFile(__dirname + '/' + 'update.html');
});
app.post('/process_post', urlencodedParser, function(req, res) {
    var response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/file_upload', function(req, res) {
    console.log(req.files[0]);
    var des_file = __dirname + '/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err) {
            if(err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8081, function() {
    console.log('server listen ok')
});