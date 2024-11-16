const EventEmitter = require('events'); // Events Emitter

const myEmitter = new EventEmitter();

const logDbConnection = () => {
	console.log('DB Connected');
};

myEmitter.addListener('connection', logDbConnection);
myEmitter.emit('connection');


myEmitter.removeListener('connection', logDbConnection);
// myEmitter.off('connection', logDbConnection);
// myEmitter.removeAllListeners('connected')
myEmitter.emit('connected');

myEmitter.on('msg', (data) => {
	console.log(`Получил: ${data}`);
});
myEmitter.emit('msg', 'Привет! Получи моё сообщение!');

myEmitter.once('off', () => {
	console.log('Я вызвался только 1 раз и не больше');
});
myEmitter.emit('off');
myEmitter.emit('off');