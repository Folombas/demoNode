import { homedir } from 'os';
import { join } from 'path';

const filePath = join(homedir(), 'weather-data.json');

const saveKeyValue = (key, value) => {
	console.log(basename(filePath));
	console.log(dirname(filePath));
	console.log(relative(filePath, dirname(filePath)));
	console.log(relative(filePath, dirname(filePath)));
	console.log(isAbsolute(filePath));
	console.log(resolve('..'));
	console.log(sep);
};

export { saveKeyValue };