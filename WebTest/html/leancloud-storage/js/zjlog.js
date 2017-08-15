(function() {
    //我的APP_ID和APP_KEY 
    var APP_ID = 'FbYwxeLvurOiHNxLsomyocYR-gzGzoHsz';
    var APP_KEY = 'ib6XFRh25EnYXyVgTmurDD0f';
    //初始化LeanCloud
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });
    //当前设备信息
    var userClient = navigator.userAgent.toLowerCase();
    //表名 UUID(一个浏览器一个);
    var tableName = localStorage.getItem('tableName');
    if(!tableName) {
        tableName = 'LOG-' + guid();
        tableName = tableName.split('-').join('');
        localStorage.setItem('tableName', tableName);
    }
    //创表
    var AVObject = AV.Object.extend(tableName);
    /**
     * 输出日(字符串)
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

    function guid() {
        return 'xxxxxxxx-xxxxt-xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}());