//引入
var events = require('events');
//创建
var event = new events.EventEmitter();

event.on('some_event', function() {
    console.log('some_event 事件触发');
});

setTimeout(function() {
    event.emit('some_event');
}, 1000);

