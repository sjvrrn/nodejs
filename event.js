var event = require('events');
var eventEmit = new event.EventEmitter();
var myEventHandler = function(){
                               console.log('new EventHandler');
							   }
eventEmit.on('screm',myEventHandler);
var eventhandler1 = function(){
	                           console.log('eventHandler1');
                              }
eventEmit.on('scream1',eventhandler1);
eventEmit.emit('scream1');		