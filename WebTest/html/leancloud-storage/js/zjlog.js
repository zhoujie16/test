(function() {
    //我的APP_ID和APP_KEY 
    var APP_ID = 'FbYwxeLvurOiHNxLsomyocYR-gzGzoHsz';
    var APP_KEY = 'ib6XFRh25EnYXyVgTmurDD0f';
    var logFlag = 'zjlog';//这个是app名字  方便区分  
    var url = 'https://zhoujie16.github.io'; //这个是表名 一个app对应一个
    //初始化LeanCloud
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });
    //当前设备信息
    var userClient = navigator.userAgent.toLowerCase();
    //表名 UUID(一个浏览器一个);
    var tableName = localStorage.getItem(url);
    if(!tableName) {
        tableName = logFlag + '_' + randomString(8);
        localStorage.setItem(url, tableName);
    }
    //创表
    var AVObject = AV.Object.extend(tableName);
    /**
     * 输出日志(字符串)
     * @param {String} msg
     */
    window.zjLog = function(msg) {
        var avObject = new AVObject();
        avObject.set('console', msg);
        avObject.set('userClient', userClient);
        avObject.save().then(function(avObject) {
            //console.log('save-ok');
        }, function(error) {
            //console.warn(error);
        });
    };

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

    function userBrowser() {
        var browserName = navigator.userAgent.toLowerCase();
        if(/msie/i.test(browserName) && !/opera/.test(browserName)) {
            return("IE");
        } else if(/firefox/i.test(browserName)) {
            return("Firefox");
        } else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
            return("Chrome");
        } else if(/opera/i.test(browserName)) {
            return("Opera");
        } else if(/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
            return("Safari");
        } else {
            return("unKnow");
        }
    }
    /**
     * 获取操作系统类型，
     * 0 Android
     * 1 iOS
     *
     */
    function getOSType() {
        if(/(Android)/i.test(navigator.userAgent)) {
            return 'android';
        } else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            return 'iOS';
        } else {
            return 'unknow';
        }
    }
    //js判断当前环境是否是微信环境
    function is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }

}());