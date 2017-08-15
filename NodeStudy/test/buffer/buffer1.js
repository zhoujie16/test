var buf = new Buffer(26);

len = buf.write('1234567890');

console.log(buf.toJSON())
console.log(len);

