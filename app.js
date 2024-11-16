const EventEmitter = require('events'); // Устройство Node.js

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
myEmitter.prependListener('msg', (data) => {
	console.log('Prepend');
});
myEmitter.emit('msg', 'Привет! Получи моё сообщение!');

myEmitter.once('off', () => {
	console.log('Я вызвался только 1 раз и не больше');
});
myEmitter.emit('off');
myEmitter.emit('off');


console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners());
console.log(myEmitter.listenerCount('msg>'));
console.log(myEmitter.listenerCount('off'));
console.log(myEmitter.listeners('msg'));
console.log(myEmitter.eventNames());

myEmitter.on('error', (err) => {
	console.log(`Произошла ошибка: ${err.message}`);
});

myEmitter.emit('error', new Error('Произошла ошибка! Boom!'));



const target = new EventTarget();

const logTarget = () => {
	console.log('Connected to target');
}

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));