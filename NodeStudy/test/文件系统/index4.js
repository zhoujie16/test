var fs = require('fs');
var txt = '我是写入的数据我是写入的数据我是写入的数据我是写入的数据我是写入的数据我是写入的数据我是写入的数据我是写入的数据我是写入的数据';
fs.writeFile('input.txt',txt,function(err){
	if (err) {
		return console.log(err);
	}
	console.log('写入成功');
	console.log('读取');
	fs.readFile('input.txt',function(err,data){
		if (err) {
			return console.log(err);
		}
		console.log(data.toString());
	});
});
