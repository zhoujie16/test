var fs = require('fs');

console.log('准备打开');
fs.open('input.txt','r+',function(err,fd){
	if (err) {
		return console.log(err);
	}
	console.log('文件打开成功');
	console.log(fd)
});
