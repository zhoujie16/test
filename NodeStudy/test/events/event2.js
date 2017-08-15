var events = require('events');
var event = new events.EventEmitter();

event.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});

event.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

event.emit('someEvent', 'arg1参数', 'arg2参数');