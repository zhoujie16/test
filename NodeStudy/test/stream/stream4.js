var fs = require('fs');

var zlib = require('zlib');

//压缩

fs.createReadStream('input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'));
	
console.log('压缩完成')
