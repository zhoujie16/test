function randomString(len) {　　
    len = len || 32;　　
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/ 　　
    var maxPos = $chars.length;　　
    var pwd = '';　　
    for(i = 0; i < len; i++) {　　　　
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　
    }　　
    return pwd;
}

var arr = [];

for(let i = 0; i < 100; i++) {
    let str = randomString(8);
    if(arr.indexOf(str) !== -1) {
        console.log('有重复', str);
        return false;
    } 
    arr.push(str); 
}
console.log(arr)
 