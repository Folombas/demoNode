const fs = require('fs');

console.log('Init'); // example Event Loop work

setTimeout(() => {
	console.log(performance.now(), 'Timer 0');
}, 100);

setImmediate(() => {
	console.log('Immediate');
});

fs.readFile(__filename, () => {
	console.log('File readed');
});

setTimeout(() => {
	for (let i = 0; i < 1000000000; i++) {

	}
	console.log('Done');
	Promise.resolve().then(() => {
		console.log('Promise inside timeout');
	});
	process.nextTick(() => console.log('tick inside timeout'));
}, 0);

Promise.resolve().then(() => {
	console.log('Promise');
});

process.nextTick(() => console.log('tick'));

console.log('Final');